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


    const handleChange = (section, field, value) => {
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
            ? `${businessDetails.businessStartedDate}-01`
            : null,

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
        setLoading(true)
        setError(null)
        try {
            const response = await axios.post(
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
            resetForm();
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
    }
}