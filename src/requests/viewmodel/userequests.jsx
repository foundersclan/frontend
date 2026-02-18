import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const BASE_URL = import.meta.env.VITE_BASE_URL

export const useRequests = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({

        // Section 1: Personal & Verification
        personalDetails: {
            fullName:    '',
            dob:         '',
            email:       '',
            whatsapp:    '',
            linkedin:    '',
            founderType: '',
            state:       '',
            city:        '',
        },

        // Section 2: Business Vitals
        businessDetails: {
            companyName:          '',
            businessIdea:         '',
            businessStartedDate:  '',
            websiteUrl:           '',
            industryType:         '',
            currentStage:         '',
            gstNumber:            '',
            cinNumber:            '',
        },

        // Section 3: Elite Filter
        eliteFilter: {
            mrr:                  '',
            teamSize:             '',
            fundingStatus:        '',
            marketClassification: '',
        },

        // Section 4: Value Exchange
        valueExchange: {
            biggestProblemSolved: '',
            currentChallenge:     '',
            contribution:         [],
            whyJoinElite:         '',
        },

        verification: {
            referral:                 '',
            willingToPayMembership:   '',
            pitchDeckUrl:             '',
            vettingCall:              '',
        },
    })

    const [currentStep, setCurrentStep] = useState(0)
    const [loading,     setLoading]     = useState(false)
    const [error,       setError]       = useState(null)

    // ── OTP State ──────────────────────────────────────────────
    const [otpSent,     setOtpSent]     = useState(false)   // true after /otp/send succeeds
    const [otpVerified, setOtpVerified] = useState(false)   // true after /otp/verify succeeds
    const [otpValue,    setOtpValue]    = useState('')       // what the user types in the OTP input
    const [otpLoading,  setOtpLoading]  = useState(false)   // spinner for otp actions
    const [otpError,    setOtpError]    = useState(null)     // otp-specific error message
    const [otpSuccess,  setOtpSuccess]  = useState(null)     // otp-specific success message
    const [resendTimer, setResendTimer] = useState(0)        // countdown seconds before resend allowed
    // ──────────────────────────────────────────────────────────


    const handleChange = (section, field, value) => {
        // If user changes their email after OTP was sent/verified, reset OTP state
        if (section === 'personalDetails' && field === 'email') {
            setOtpSent(false)
            setOtpVerified(false)
            setOtpValue('')
            setOtpError(null)
            setOtpSuccess(null)
            setResendTimer(0)
        }

        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }))
    }

    const handleContributionChange = (value) => {
        setFormData(prev => {
            const current = prev.valueExchange.contribution
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value]
            return {
                ...prev,
                valueExchange: {
                    ...prev.valueExchange,
                    contribution: updated
                }
            }
        })
    }

    const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4))
    const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0))


    // ── OTP Helpers ────────────────────────────────────────────

    /** Starts a 60-second countdown to prevent OTP spam */
    const startResendTimer = () => {
        setResendTimer(60)
        const interval = setInterval(() => {
            setResendTimer(prev => {
                if (prev <= 1) { clearInterval(interval); return 0 }
                return prev - 1
            })
        }, 1000)
    }

    /** POST /api/otp/send — sends OTP to the email in personalDetails */
    const sendOtp = async () => {
        const email = formData.personalDetails.email?.trim()

        if (!email) {
            setOtpError('Please enter your email address first.')
            return
        }

        setOtpLoading(true)
        setOtpError(null)
        setOtpSuccess(null)

        try {
            await axios.post(
                `${BASE_URL}/api/otp/send`,
                { email },
                { headers: { 'Content-Type': 'application/json' } }
            )
            setOtpSent(true)
            setOtpSuccess('OTP sent! Please Check your mail.')
            startResendTimer()
        } catch (err) {
            setOtpError(err.response?.data?.message || 'Failed to send OTP. Try again.')
        } finally {
            setOtpLoading(false)
        }
    }

    /** POST /api/otp/verify — verifies the OTP the user typed */
    const verifyOtp = async () => {
        const email = formData.personalDetails.email?.trim()

        if (!otpValue || otpValue.length !== 6) {
            setOtpError('Please enter the 6-digit OTP.')
            return
        }

        setOtpLoading(true)
        setOtpError(null)
        setOtpSuccess(null)

        try {
            await axios.post(
                `${BASE_URL}/api/otp/verify`,
                { email, otp: otpValue },
                { headers: { 'Content-Type': 'application/json' } }
            )
            setOtpVerified(true)
            setOtpSuccess('Email verified successfully ✓')
            setOtpError(null)
        } catch (err) {
            setOtpError(err.response?.data?.message || 'Invalid OTP. Please try again.')
        } finally {
            setOtpLoading(false)
        }
    }
    // ──────────────────────────────────────────────────────────


    const flattenFormData = () => {
        const { personalDetails, businessDetails, eliteFilter, valueExchange, verification } = formData

        return {
            full_name:    personalDetails.fullName?.trim(),
            date_of_birth: personalDetails.dob || null,
            email:        personalDetails.email?.trim(),
            phone:        personalDetails.whatsapp?.trim(),
            linkedin_url: personalDetails.linkedin?.trim(),
            role:         personalDetails.founderType || null,
            state:        personalDetails.state?.trim(),
            city:         personalDetails.city?.trim(),

            company_name:               businessDetails.companyName?.trim(),
            business_idea:              businessDetails.businessIdea?.trim(),
            business_started_month_year: businessDetails.businessStartedDate
                ? `${businessDetails.businessStartedDate}-01`
                : null,
            website_url:   businessDetails.websiteUrl?.trim() || null,
            industry_type: businessDetails.industryType || null,
            current_stage: businessDetails.currentStage || null,
            gst_number:    businessDetails.gstNumber?.trim() || null,
            cin_number:    businessDetails.cinNumber?.trim() || null,

            mrr:                    eliteFilter.mrr || null,
            team_size:              eliteFilter.teamSize || null,
            funding_status:         eliteFilter.fundingStatus || null,
            market_classification:  eliteFilter.marketClassification || null,

            biggest_problem_solved: valueExchange.biggestProblemSolved?.trim(),
            current_challenge:      valueExchange.currentChallenge?.trim(),
            contribution:           valueExchange.contribution || [],
            why_join_elite:         valueExchange.whyJoinElite?.trim(),

            referral:                 verification.referral?.trim() || null,
            willing_to_pay_membership: verification.willingToPayMembership || null,
            pitch_deck_url:           verification.pitchDeckUrl?.trim() || null,
            vetting_call:             verification.vettingCall || null,
        }
    }


    const handleSubmit = async () => {
        if (!otpVerified) {
            setError('Please verify your email with OTP before submitting.')
            return
        }

        setLoading(true)
        setError(null)
        try {
            await axios.post(
                `${BASE_URL}/api/registrations`,
                flattenFormData(),
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            alert("Invitation Request Sent Successfully")
            resetForm()
            navigate('/profile/user')
        } catch (err) {
            setError(err.response?.data?.message || err.message || 'Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    const resetForm = () => {
        setFormData({
            personalDetails: {
                fullName: '', dob: '', email: '', whatsapp: '',
                linkedin: '', founderType: '', state: '', city: '',
            },
            businessDetails: {
                companyName: '', businessIdea: '', businessStartedDate: '',
                websiteUrl: '', industryType: '', currentStage: '',
                gstNumber: '', cinNumber: '',
            },
            eliteFilter: {
                mrr: '', teamSize: '', fundingStatus: '', marketClassification: '',
            },
            valueExchange: {
                biggestProblemSolved: '', currentChallenge: '',
                contribution: [], whyJoinElite: '',
            },
            verification: {
                referral: '', willingToPayMembership: '',
                pitchDeckUrl: '', vettingCall: '',
            },
        })
        setCurrentStep(0)
        setError(null)

        setOtpSent(false)
        setOtpVerified(false)
        setOtpValue('')
        setOtpError(null)
        setOtpSuccess(null)
        setResendTimer(0)
    }

    return {
        formData,
        currentStep,
        loading,
        error,
        handleChange,
        handleContributionChange,
        nextStep,
        prevStep,
        handleSubmit,
        resetForm,


        otpSent,
        otpVerified,
        otpValue,
        setOtpValue,
        otpLoading,
        otpError,
        otpSuccess,
        resendTimer,
        sendOtp,
        verifyOtp,
    }
}