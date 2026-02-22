import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const BASE_URL = import.meta.env.VITE_BASE_URL

// ── Validators ─────────────────────────────────────────────────────────────

const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

const isValidPhone = (phone) =>
    /^[6-9]\d{9}$/.test(phone)

const isValidLinkedIn = (url) =>
    !url || /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/.test(url)

const isValidUrl = (url) => {
    if (!url) return true
    try { new URL(url); return true }
    catch { return false }
}

const validateStep = (step, formData) => {
    const errors = {}
    const { personalDetails, businessDetails, eliteFilter, valueExchange, verification } = formData

    if (step === 0) {
        if (!personalDetails.fullName?.trim())
            errors.fullName = 'Full name is required.'

        if (!personalDetails.dob)
            errors.dob = 'Date of birth is required.'
        else {
            const age = new Date().getFullYear() - new Date(personalDetails.dob).getFullYear()
            if (age < 18) errors.dob = 'You must be at least 18 years old.'
        }

        if (!personalDetails.email?.trim())
            errors.email = 'Email is required.'
        else if (!isValidEmail(personalDetails.email))
            errors.email = 'Enter a valid email address.'

        if (!personalDetails.whatsapp?.trim())
            errors.whatsapp = 'WhatsApp number is required.'
        else if (!isValidPhone(personalDetails.whatsapp))
            errors.whatsapp = 'Enter a valid 10-digit Indian mobile number.'

        if (personalDetails.linkedin && !isValidLinkedIn(personalDetails.linkedin))
            errors.linkedin = 'Enter a valid LinkedIn profile URL.'

        if (!personalDetails.founderType)
            errors.founderType = 'Please select your founder type.'

        if (!personalDetails.state?.trim())
            errors.state = 'State is required.'

        if (!personalDetails.city?.trim())
            errors.city = 'City is required.'
    }

    if (step === 1) {
        if (!businessDetails.companyName?.trim())
            errors.companyName = 'Company name is required.'

        if (!businessDetails.businessIdea?.trim())
            errors.businessIdea = 'Please describe your business idea.'
        else if (businessDetails.businessIdea.trim().length < 30)
            errors.businessIdea = 'Please provide at least 30 characters.'

        if (!businessDetails.businessStartedDate)
            errors.businessStartedDate = 'Business start date is required.'

        if (!businessDetails.industryType)
            errors.industryType = 'Please select your industry type.'

        if (!businessDetails.currentStage)
            errors.currentStage = 'Please select your current stage.'
    }

    if (step === 2) {
        if (!eliteFilter.mrr)
            errors.mrr = 'Please select your MRR range.'

        if (!eliteFilter.teamSize)
            errors.teamSize = 'Please select your team size.'

        if (!eliteFilter.fundingStatus)
            errors.fundingStatus = 'Please select your funding status.'

        if (!eliteFilter.marketClassification)
            errors.marketClassification = 'Please select your market classification.'
    }

    if (step === 3) {
        if (!valueExchange.biggestProblemSolved?.trim())
            errors.biggestProblemSolved = 'This field is required.'
        else if (valueExchange.biggestProblemSolved.trim().length < 50)
            errors.biggestProblemSolved = 'Please provide at least 50 characters.'

        if (!valueExchange.currentChallenge?.trim())
            errors.currentChallenge = 'This field is required.'
        else if (valueExchange.currentChallenge.trim().length < 50)
            errors.currentChallenge = 'Please provide at least 50 characters.'

        if (!valueExchange.contribution || valueExchange.contribution.length === 0)
            errors.contribution = 'Please select at least one contribution.'

        if (!valueExchange.whyJoinElite?.trim())
            errors.whyJoinElite = 'This field is required.'
        else if (valueExchange.whyJoinElite.trim().length < 50)
            errors.whyJoinElite = 'Please provide at least 50 characters.'
    }

    if (step === 4) {
        if (!verification.willingToPayMembership)
            errors.willingToPayMembership = 'Please select an option.'

        if (!verification.vettingCall)
            errors.vettingCall = 'Please select an option.'

        if (verification.pitchDeckUrl && !isValidUrl(verification.pitchDeckUrl))
            errors.pitchDeckUrl = 'Enter a valid URL for your pitch deck.'
    }

    return errors
}

export const useRequests = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
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

    const [currentStep, setCurrentStep] = useState(0)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [fieldErrors, setFieldErrors] = useState({})

    const handleChange = (section, field, value) => {
        setFieldErrors(prev => ({ ...prev, [field]: undefined }))
        setFormData(prev => ({
            ...prev,
            [section]: { ...prev[section], [field]: value }
        }))
    }

    const handleContributionChange = (value) => {
        setFieldErrors(prev => ({ ...prev, contribution: undefined }))
        setFormData(prev => {
            const current = prev.valueExchange.contribution
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value]
            return { ...prev, valueExchange: { ...prev.valueExchange, contribution: updated } }
        })
    }

    const nextStep = () => {
        const errors = validateStep(currentStep, formData)
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors)
            return
        }
        setFieldErrors({})
        setCurrentStep(prev => Math.min(prev + 1, 4))
    }

    const prevStep = () => {
        setFieldErrors({})
        setCurrentStep(prev => Math.max(prev - 1, 0))
    }

    const flattenFormData = () => {
        const { personalDetails, businessDetails, eliteFilter, valueExchange, verification } = formData
        return {
            full_name: personalDetails.fullName?.trim(),
            date_of_birth: personalDetails.dob || null,
            email: personalDetails.email?.trim(),
            phone: personalDetails.whatsapp?.trim(),
            linkedin_url: personalDetails.linkedin?.trim(),
            role: personalDetails.founderType || null,
            state: personalDetails.state?.trim(),
            city: personalDetails.city?.trim(),
            company_name: businessDetails.companyName?.trim(),
            business_idea: businessDetails.businessIdea?.trim(),
            business_started_month_year: businessDetails.businessStartedDate
                ? `${businessDetails.businessStartedDate}-01` : null,
            website_url: businessDetails.websiteUrl?.trim() || null,
            industry_type: businessDetails.industryType || null,
            current_stage: businessDetails.currentStage || null,
            gst_number: businessDetails.gstNumber?.trim() || null,
            cin_number: businessDetails.cinNumber?.trim() || null,
            mrr: eliteFilter.mrr || null,
            team_size: eliteFilter.teamSize || null,
            funding_status: eliteFilter.fundingStatus || null,
            market_classification: eliteFilter.marketClassification || null,
            biggest_problem_solved: valueExchange.biggestProblemSolved?.trim(),
            current_challenge: valueExchange.currentChallenge?.trim(),
            contribution: valueExchange.contribution || [],
            why_join_elite: valueExchange.whyJoinElite?.trim(),
            referral: verification.referral?.trim() || null,
            willing_to_pay_membership: verification.willingToPayMembership || null,
            pitch_deck_url: verification.pitchDeckUrl?.trim() || null,
            vetting_call: verification.vettingCall || null,
        }
    }

    const handleSubmit = async () => {
        const errors = validateStep(4, formData)
        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors)
            return
        }

        setLoading(true)
        setError(null)
        try {
            await axios.post(`${BASE_URL}/api/registrations`, flattenFormData(), {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
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
            personalDetails: { fullName: '', dob: '', email: '', whatsapp: '', linkedin: '', founderType: '', state: '', city: '' },
            businessDetails: { companyName: '', businessIdea: '', businessStartedDate: '', websiteUrl: '', industryType: '', currentStage: '', gstNumber: '', cinNumber: '' },
            eliteFilter: { mrr: '', teamSize: '', fundingStatus: '', marketClassification: '' },
            valueExchange: { biggestProblemSolved: '', currentChallenge: '', contribution: [], whyJoinElite: '' },
            verification: { referral: '', willingToPayMembership: '', pitchDeckUrl: '', vettingCall: '' },
        })
        setCurrentStep(0)
        setError(null)
        setFieldErrors({})
    }

    return {
        formData,
        currentStep,
        loading,
        error,
        fieldErrors,
        handleChange,
        handleContributionChange,
        nextStep,
        prevStep,
        handleSubmit,
        resetForm,
    }
}