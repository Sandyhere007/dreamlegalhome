import React, { useEffect, useState } from 'react'
// import { server } from '..'
import '../Styles/products.scss'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Select from 'react-select';
import { isURL } from 'validator';
import { categoryOptions } from '../Assets/JSON/Category';
import { deploymentOptions } from '../Assets/JSON/Deployment';
import { countryOptions } from '../Assets/JSON/Country';
import { commonToAll, clientManagementSoftwareOptions, complianceAndRiskManagementOptions, contractManagementSoftwareOptions, digitalSignatureOptions, documentManagementAndAutomationOptions, EBillingAndInvoicingOptions, EDiscoveryOptions, intellectualPropertyManagementOptions, litigationManagementAndAnalyticsOptions, legalWorkflowAutomation, budgetExpenseAndTimeTracking, legalWorkflowAutomationOptions } from '../Assets/JSON/Features'

import { toolAdministration } from '../Assets/JSON/ToolAdministration';
import { languageOptions } from '../Assets/JSON/Language';
import { customerSegmentOptions } from '../Assets/JSON/CustomerSegment';
import { industryOptions } from '../Assets/JSON/Industry';
import { clientTeamSizeOptions } from '../Assets/JSON/ClientTeamSize';
import { demoOptions } from '../Assets/JSON/Demo';
import { supportOptions } from '../Assets/JSON/Support';
import { trainingOptions } from '../Assets/JSON/Training';
import { practiceAreaOptions } from '../Assets/JSON/PracticeAreas';
import { timeSelectionOptions } from '../Assets/JSON/TimeSelection';
import { memoryOptions } from '../Assets/JSON/MemoryOptions';




const Products = () => {
    const [name, setName] = useState("")
    const [overview, setOverview] = useState("")
    const [uniqueSellingProposition, setUniqueSellingProposition] = useState("")
    const [category, setCategory] = useState([])
    const [clientManagementSoftware, setClientManagementSoftware] = useState(false)
    const [complianceAndRiskManagement, setComplianceAndRiskManagement] = useState(false)
    const [contractManagementSoftware, setContractManagementSoftware] = useState(false)
    const [digitalSignature, setDigitalSignature] = useState(false)
    const [documentManagementAndAutomation, setDocumentManagementAndAutomation] = useState(false)
    const [EBillingAndInvoicing, seteBillingAndInvoicing] = useState(false)
    const [eDiscovery, setEDiscovery] = useState(false)
    const [intellectualPropertyManagement, setIntellectualPropertyManagement] = useState(false)
    const [litigationManagementAndAnalytics, setLitigationManagementAndAnalytics] = useState(false)
    const [legalWorkflowAutomation, setLegalWorkflowAutomation] = useState(false)

    const [deployment, setDeployment] = useState([])
    const [accessibility, setAccessibility] = useState(false)
    const [adoptionTime, setAdoptionTime] = useState(0)
    const [adoptionTimeSelected, setAdoptionTimeSelected] = useState("")
    const [country, setCountry] = useState([])
    const [internalCollaboration, setInternalCollaboration] = useState([])
    const [externalCollaboration, setExternalCollaboration] = useState([])
    const [analyticsAndReporting, setAnalyticAndReporting] = useState([])
    const [toolAdministrationAndControlChange, setToolAdministrationAndControlChange] = useState([])
    const [intakeAndLeadManagement, setIntakeAndLeadManagement] = useState([])
    const [clientPortal, setClientPortal] = useState([])
    const [documentManagement, setDocumentManagement] = useState([])
    const [caseAlerts, setCaseAlerts] = useState([])
    const [budgetExpenseAndTimeTracking, setBudgetExpenseAndTimeTracking] = useState([])
    const [clientBillingAndInvoicing, setClientBillingAndInvoicing] = useState([])
    const [policyManagement, setPolicyManagement] = useState([])
    const [issueManagement, setIssueManagement] = useState([])
    const [lawsComplianceAndRegulatoryTracking, setLawsComplianceAndRegulatoryTracking] = useState([])
    const [contractCreationAndAuthoring, setContractCreationAndAuthoring] = useState([])
    const [contractRepository, setContractRepository] = useState([])
    const [contractNegotiation, setContractNegotiation] = useState([])
    const [lifecycleManagement, setLifecycleManagement] = useState([])
    const [clauseLibrary, setClauseLibrary] = useState([])
    const [fieldsCreation, setFieldsCreation] = useState([])
    const [trackingAndValidity, setTrackingAndValidity] = useState([])
    const [documentManagementAndTemplates, setDocumentManagementAndTemplates] = useState([])
    const [documentCapturing, setDocumentCapturing] = useState([])
    const [documentCreationAndTemplates, setDocumentCreationAndTemplates] = useState([])
    const [documentCapturing2, setDocumentCapturing2] = useState([])
    const [documentSearchAndNavigation, setDocumentSearchAndNavigation] = useState([])
    const [authentication, setAuthentication] = useState([])
    const [taskAllotment, setTaskAllotment] = useState([])
    const [budgetingExpenseAndTimeTracking, setBudgetingExpenseAndTimeTracking] = useState([])
    const [clientManagement, setClientManagement] = useState([])
    const [invoiceGenerationAndReview, setInvoiceGenerationAndReview] = useState([])
    const [dataIdentificationAndCollection, setDataIdentificationAndCollection] = useState([])
    const [searchProcessingAndAnalysis, setSearchProcessingAndAnalysis] = useState([])
    const [reviewAndProduction, setReviewAndProduction] = useState([])
    const [legalHoldManagement, setLegalHoldManagement] = useState([])
    const [ideationAndCreation, setIdeationAndCreation] = useState([])
    const [lifecycleManagement2, setLifecycleManagement2] = useState([])
    const [searchAndDiscovery, setSearchAndDiscovery] = useState([])
    const [storageAndRepository, setStorageAndRepository] = useState([])
    const [matterLifecycleTracking, setMatterLifecycleTracking] = useState([])
    const [courtAndCaseSearch, setCourtAndCaseSearch] = useState([])
    const [budgetExpenseAndTimeTracking2, setBudgetExpenseAndTimeTracking2] = useState([])
    const [litigationDocketingFeatures, setLitigationDocketingFeatures] = useState([])
    const [workflowDesignAndConfiguration, setWorkflowDesignAndConfiguration] = useState([])
    const [assignmentAllotmentAndTracking, setAssignmentAllotmentAndTracking] = useState([])
    const [documentCreationAndManagement, setDocumentCreationAndManagement] = useState([])
    const [lawsComplianceAndRegulatoryTracking2, setLawsComplianceAndRegulatoryTracking2] = useState([])

    const [language, setLanguage] = useState([])
    const [customerSegment, setCustomerSegment] = useState([])
    // Customer segment
    const [individualPractitioners, setIndividualPractitioners] = useState(false);
    const [lawFirms, setLawFirms] = useState(false);
    const [inHouseLegalDepartments, setInHouseLegalDepartments] = useState(false);
    const [enterprises, setEnterprises] = useState(false);
    const [judiciary, setJudiciary] = useState(false);
    const [governmentDepartments, setGovernmentDepartments] = useState(false);
    const [startups, setStartups] = useState(false);
    // Customer Segment Percentage  
    const [individualPractitionersPercentage, setIndividualPractitionersPercentage] = useState(0);
    const [lawFirmsPercentage, setLawFirmsPercentage] = useState(0);
    const [inHouseLegalDepartmentsPercentage, setInHouseLegalDepartmentsPercentage] = useState(0);
    const [enterprisesPercentage, setEnterprisesPercentage] = useState(0);
    const [judiciaryPercentage, setJudiciaryPercentage] = useState(0);
    const [governmentDepartmentsPercentage, setGovernmentDepartmentsPercentage] = useState(0);
    const [startupsPercentage, setStartupsPercentage] = useState(0);

    const [industries, setIndustries] = useState([])
    const [practiceAreas, setPracticeAreas] = useState("")
    const [clientTeamSize, setClientTeamSize] = useState([])


    const [internalMessagingAndCommunication, setInternalMessagingAndCommunication] = useState(false);
    const [internalNotification, setInternalNotification] = useState(false);
    const [internalDocumentSharing, setInternalDocumentSharing] = useState(false);
    const [internalRealTimeDocumentEditing, setInternalRealTimeDocumentEditing] = useState(false);
    const [externalMessagingAndCommunication, setExternalMessagingAndCommunication] = useState(false);
    const [externalNotification, setExternalNotification] = useState(false);
    const [externalDocumentSharing, setExternalDocumentSharing] = useState(false);
    const [externalRealTimeDocumentEditing, setExternalRealTimeDocumentEditing] = useState(false);
    const [analyticsDashboard, setAnalyticsDashboard] = useState(false);
    const [reportGeneration, setReportGeneration] = useState(false);
    const [dashboardCustomization, setDashboardCustomization] = useState(false);
    const [reportCustomization, setReportCustomization] = useState(false);
    const [multipleUserRole, setMultipleUserRole] = useState(false);
    const [granularPermission, setGranularPermission] = useState(false);
    const [informationAccessControl, setInformationAccessControl] = useState(false);
    const [roleBasedAccessControl, setRoleBasedAccessControl] = useState(false);
    //Process Coverage
    const [intake, setIntake] = useState(false);
    const [assessment, setAssessment] = useState(false);
    const [strategize, setStrategize] = useState(false);
    const [represent, setRepresent] = useState(false);
    const [communication, setCommunication] = useState(false);
    const [review, setReview] = useState(false);
    const [coverage, setCoverage] = useState(false);
    const [crmAssessment, setCrmAssessment] = useState(false);
    const [validation, setValidation] = useState(false);
    const [implementation, setImplementation] = useState(false);
    const [monitoring, setMonitoring] = useState(false);
    const [analysis, setAnalysis] = useState(false);
    const [create, setCreate] = useState(false);
    const [negotiation, setNegotiation] = useState(false);
    const [cmsAuthentication, setCmsAuthentication] = useState(false);
    const [execute, setExecute] = useState(false);
    const [store, setStore] = useState(false);
    const [tracking, setTracking] = useState(false);
    const [documentPreparation, setDocumentPreparation] = useState(false);
    const [dsAuthentication, setDsAuthentication] = useState(false);
    const [signing, setSigning] = useState(false);
    const [encryption, setEncryption] = useState(false);
    const [verification, setVerification] = useState(false);
    const [distribution, setDistribution] = useState(false);
    const [capture, setCapture] = useState(false);
    const [changeManagement, setChangeManagement] = useState(false);
    const [documentReview, setDocumentReview] = useState(false);
    const [organize, setOrganize] = useState(false);
    const [accessManagement, setAccessManagement] = useState(false);
    const [retrieval, setRetrieval] = useState(false);
    const [invoiceGeneration, setInvoiceGeneration] = useState(false);
    const [authorization, setAuthorization] = useState(false);
    const [distributionAndAccessibility, setDistributionAndAccessibility] = useState(false);
    const [paymentFacilitation, setPaymentFacilitation] = useState(false);
    const [eBillTracking, setEBillTracking] = useState(false);
    const [eBillAnalysis, setEBillAnalysis] = useState(false);
    const [discover, setDiscover] = useState(false);
    const [preserve, setPreserve] = useState(false);
    const [acquire, setAcquire] = useState(false);
    const [examine, setExamine] = useState(false);
    const [evaluate, setEvaluate] = useState(false);
    const [present, setPresent] = useState(false);
    const [cataloging, setCataloging] = useState(false);
    const [ipAnalysis, setIpAnalysis] = useState(false);
    const [protection, setProtection] = useState(false);
    const [ipMonitoring, setIpMonitoring] = useState(false);
    const [enforcement, setEnforcement] = useState(false);
    const [reporting, setReporting] = useState(false);
    const [litigationIntake, setLitigationIntake] = useState(false);
    const [litigationStrategize, setLitigationStrategize] = useState(false);
    const [litigationPreparation, setLitigationPreparation] = useState(false);
    const [litigationSupport, setLitigationSupport] = useState(false);
    const [analytics, setAnalytics] = useState(false);
    const [outcomeEvaluation, setOutcomeEvaluation] = useState(false);
    const [processIdentification, setProcessIdentification] = useState(false);
    const [workflowConfiguration, setWorkflowConfiguration] = useState(false);
    const [workflowValidation, setWorkflowValidation] = useState(false);
    const [workflowImplementation, setWorkflowImplementation] = useState(false);
    const [workflowTracking, setWorkflowTracking] = useState(false);
    const [workflowOptimization, setWorkflowOptimization] = useState(false);


    const [minimumContractPeriod, setMinimumContractPeriod] = useState(Number)
    const [minimumContractPeriodSelected, setMinimumContractPeriodSelected] = useState(Number)
    const [videoLink, setVideoLink] = useState("")
    const [videoLinkValid, setVideoLinkValid] = useState("")
    const [images, setImages] = useState("")
    const [knowHowDocument1, setKnowHowDocument1] = useState("")
    const [knowHowDocument2, setKnowHowDocument2] = useState("")
    const [knowHowDocument3, setKnowHowDocument3] = useState("")
    const [knowHowDocument1Valid, setKnowHowDocument1Valid] = useState("")
    const [knowHowDocument2Valid, setKnowHowDocument2Valid] = useState("")
    const [knowHowDocument3Valid, setKnowHowDocument3Valid] = useState("")
    const [linkedIn, setLinkedIn] = useState("")
    const [linkedInValid, setLinkedInValid] = useState("")
    const [instagram, setInstagram] = useState("")
    const [instagramValid, setInstagramValid] = useState("")
    const [twitter, setTwitter] = useState("")
    const [twitterValid, setTwitterValid] = useState("")
    const [youtube, setYoutube] = useState("")
    const [youtubeValid, setYoutubeValid] = useState("")
    const [otherLink, setOtherLink] = useState("")
    const [otherLinkValid, setOtherLinkValid] = useState("")
    const [demo, setDemo] = useState(Boolean)
    const [demoData, setDemoData] = useState([])
    const [demoLink, setDemoLink] = useState("")
    const [demoLinkValid, setDemoLinkValid] = useState("")

    const [support, setSupport] = useState(Boolean)
    const [supportData, setSupportData] = useState([])
    const [training, setTraining] = useState(Boolean)
    const [trainingData, setTrainingData] = useState([])
    const [storage, setStorage] = useState("")
    const [storageChange, setStorageChange] = useState("")
    const [fileSizeChange, setFileSizeChange] = useState("")

    const [fileSize, setFileSize] = useState("")


    const [freeTrial, setFreeTrial] = useState(false)
    const [freePlan, setFreePlan] = useState(false)
    const [customerPricing, setCustomerPricing] = useState("")
    const [nameOfPlans1, setNameOfPlans1] = useState('')
    const [plan1Pricing, setPlan1Pricing] = useState('')
    const [plan1Parameter1, setPlan1Parameter1] = useState('')
    const [plan1Parameter2, setPlan1Parameter2] = useState('')
    const [note1, setNote1] = useState('')
    const [isSecondPlan, setIsSecondPlan] = useState(false)
    const [nameOfPlans2, setNameOfPlans2] = useState('')
    const [plan2Pricing, setPlan2Pricing] = useState('')
    const [plan2Parameter1, setPlan2Parameter1] = useState('')
    const [plan2Parameter2, setPlan2Parameter2] = useState('')
    const [note2, setNote2] = useState('')
    const [parameter1, setParameter1] = useState('')
    const [parameter2, setParameter2] = useState('')
    const [parameter3, setParameter3] = useState('')
    const [parameter4, setParameter4] = useState('')
    const [parameter5, setParameter5] = useState('')
    const [parameter6, setParameter6] = useState('')
    const [requestForChange, setRequestForChange] = useState(false)
    const [postImplementationTraining, setPostImplementationTraining] = useState(false)
    const [dataMigration, setDataMigration] = useState(false)
    const [userTestimonialName1, setUserTestimonialName1] = useState("")
    const [userTestimonialDesignation1, setUserTestimonialDesignation1] = useState("")
    const [userTestimonialCompany1, setUserTestimonialCompany1] = useState("")
    const [userTestimonialComment1, setUserTestimonialComment1] = useState("")
    const [userTestimonialName2, setUserTestimonialName2] = useState("")
    const [isSecondTestimonial, setIsSecondTestimonial] = useState(false)
    const [userTestimonialDesignation2, setUserTestimonialDesignation2] = useState("")
    const [userTestimonialCompany2, setUserTestimonialCompany2] = useState("")
    const [userTestimonialComment2, setUserTestimonialComment2] = useState("")


    // const [dataItem, setDataItem] = useState([]);

    // useEffect(async (e) => {
    //    await axios.get(`https://dreamlegalproductbackend.onrender.com/api/all`, {
    //       withCredentials: true,
    //     }).then((res) => setDataItem(res.data))

    //   }, [])

    const submitHandler = async (e) => {
        e.preventDefault();

        const { data } = await axios.post("https://dreamlegalproductbackend.onrender.com/api/products/new", {
            name, overview, uniqueSellingProposition, category, deployment, accessibility, adoptionTime, country, language, customerSegment, individualPractitionersPercentage, lawFirmsPercentage, inHouseLegalDepartmentsPercentage, enterprisesPercentage, judiciaryPercentage, governmentDepartmentsPercentage, startupsPercentage, industries, practiceAreas, clientTeamSize, internalCollaboration, externalCollaboration, analyticsAndReporting, toolAdministrationAndControlChange, intakeAndLeadManagement, clientPortal, documentManagement, caseAlerts, budgetExpenseAndTimeTracking, clientBillingAndInvoicing, policyManagement, issueManagement, lawsComplianceAndRegulatoryTracking, contractCreationAndAuthoring, contractRepository, contractNegotiation, lifecycleManagement, clauseLibrary, fieldsCreation, trackingAndValidity, documentManagementAndTemplates, documentCapturing, documentCreationAndTemplates, documentCapturing2, documentSearchAndNavigation, authentication, taskAllotment, budgetingExpenseAndTimeTracking, clientManagement, invoiceGenerationAndReview, dataIdentificationAndCollection, searchProcessingAndAnalysis, reviewAndProduction, legalHoldManagement, ideationAndCreation, lifecycleManagement2, searchAndDiscovery, storageAndRepository, matterLifecycleTracking, courtAndCaseSearch, budgetExpenseAndTimeTracking2, litigationDocketingFeatures, workflowDesignAndConfiguration, assignmentAllotmentAndTracking, documentCreationAndManagement, lawsComplianceAndRegulatoryTracking2, intake, assessment, strategize, represent, communication, review, coverage, crmAssessment, validation, implementation, monitoring, analysis, create, negotiation, cmsAuthentication, execute, store, tracking, documentPreparation, dsAuthentication, signing, encryption, verification, distribution, capture, changeManagement, documentReview, organize, accessManagement, retrieval, invoiceGeneration, authorization, distributionAndAccessibility, paymentFacilitation, eBillTracking, eBillAnalysis, discover, preserve, acquire, examine, evaluate, present, cataloging, ipAnalysis, protection, ipMonitoring, enforcement, reporting, litigationIntake, litigationStrategize, litigationPreparation, litigationSupport, analytics, outcomeEvaluation, processIdentification, workflowConfiguration, workflowValidation, workflowImplementation, workflowTracking, workflowOptimization, minimumContractPeriod, freeTrial, freePlan, nameOfPlans1, plan1Pricing, plan1Parameter1, plan1Parameter2, note1, nameOfPlans2, plan2Pricing, plan2Parameter1, plan2Parameter2, note2, parameter1, parameter2, parameter3, parameter4, parameter5, parameter6, videoLink, knowHowDocument1, knowHowDocument2, knowHowDocument3, linkedIn, instagram, twitter, youtube, otherLink, demo, demoData, demoLink, support, supportData, training, trainingData, storage, storageChange, fileSize, fileSizeChange, requestForChange, postImplementationTraining, dataMigration, userTestimonialName1, userTestimonialDesignation1, userTestimonialCompany1, userTestimonialComment1, userTestimonialName2, userTestimonialDesignation2, userTestimonialCompany2, userTestimonialComment2
        },

            {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            }
        );
        toast.success("Product Added Successfully");
    }




    const handleLanguageChange =
        (selectedOptions) => {
            setLanguage(selectedOptions)
        };

    const handleCountryChange = (selectedOptions) => {
        setCountry(selectedOptions)
    };

    const handleDeploymentChange = (selectedOptions) => {
        setDeployment(selectedOptions)
    };


    const handleCategoryChange = (selectedOptions) => {
        setCategory(selectedOptions);

        selectedOptions.forEach((option) => {
            switch (option.value) {
                case 'Client Management Software':
                    setClientManagementSoftware(selectedOptions.includes(option));
                    break;
                case 'Compliance and Risk Management':
                    setComplianceAndRiskManagement(selectedOptions.includes(option));
                    break;
                case 'Contract Management Software':
                    setContractManagementSoftware(selectedOptions.includes(option));
                    break;
                case 'Digital Signature':
                    setDigitalSignature(selectedOptions.includes(option));
                    break;
                case 'Document Management and Automation':
                    setDocumentManagementAndAutomation(selectedOptions.includes(option));
                    break;
                case 'E-billing and Invoicing':
                    seteBillingAndInvoicing(selectedOptions.includes(option));
                    break;
                case 'E-discovery':
                    setEDiscovery(selectedOptions.includes(option));
                    break;
                case 'Intellectual Property Management':
                    setIntellectualPropertyManagement(selectedOptions.includes(option));
                    break;
                case 'Litigation Management and Analytics':
                    setLitigationManagementAndAnalytics(selectedOptions.includes(option));
                    break;
                case 'Legal Workflow Automation':
                    setLegalWorkflowAutomation(selectedOptions.includes(option));
                    break;
                default:
                    break;
            }
        });
    };

    const handleCustomerSegmentChange = (selectedOptions) => {
        setCustomerSegment(selectedOptions);

        selectedOptions.forEach((option) => {
            switch (option.value) {
                case 'Individual Practitioners':
                    setIndividualPractitioners(selectedOptions.includes(option));
                    break;
                case 'Law Firms':
                    setLawFirms(selectedOptions.includes(option));
                    break;
                case 'In-house Legal Departments':
                    setInHouseLegalDepartments(selectedOptions.includes(option));
                    break;
                case 'Enterprises':
                    setEnterprises(selectedOptions.includes(option));
                    break;
                case 'Judiciary':
                    setJudiciary(selectedOptions.includes(option));
                    break;
                case 'Government Departments':
                    setGovernmentDepartments(selectedOptions.includes(option));
                    break;
                case 'Startups':
                    setStartups(selectedOptions.includes(option));
                    break;
                default:
                    break;
            }
        });
    };


    const handleInternalCollaborationChange =
        (selectedOptions) => {
            setInternalCollaboration(selectedOptions)
        };

    const handleExternalCollaborationChange =
        (selectedOptions) => {
            setExternalCollaboration(selectedOptions)
        };

    const handleAnalyticsAndReportingChange =
        (selectedOptions) => {
            setAnalyticAndReporting(selectedOptions)
        };

    const handleToolAdministrationAndControlChange =
        (selectedOptions) => {
            setToolAdministrationAndControlChange(selectedOptions)
        };

    const handleIntakeAndLeadManagementChange =
        (selectedOptions) => {
            setIntakeAndLeadManagement(selectedOptions)
        };
    const handleClientPortalChange =
        (selectedOptions) => {
            setClientPortal(selectedOptions)
        };
    const handleDocumentManagementChange =
        (selectedOptions) => {
            setDocumentManagement(selectedOptions)
        };
    const handleCaseAlertsChange =
        (selectedOptions) => {
            setCaseAlerts(selectedOptions)
        };
    const handleBudgetExpenseAndTimeTrackingChange =
        (selectedOptions) => {
            setBudgetExpenseAndTimeTracking(selectedOptions)
        };
    const handleClientBillingAndInvoicingChange =
        (selectedOptions) => {
            setClientBillingAndInvoicing(selectedOptions)
        };
    const handlePolicyManagementChange =
        (selectedOptions) => {
            setPolicyManagement(selectedOptions)
        };
    const handleIssueManagementChange =
        (selectedOptions) => {
            setIssueManagement(selectedOptions)
        };
    const handleLawsComplianceAndRegulatoryTrackingChange =
        (selectedOptions) => {
            setLawsComplianceAndRegulatoryTracking(selectedOptions)
        };
    const handleContractCreationAndAuthoringChange =
        (selectedOptions) => {
            setContractCreationAndAuthoring(selectedOptions)
        };
    const handleContractRepositoryChange =
        (selectedOptions) => {
            setContractRepository(selectedOptions)
        };
    const handleContractNegotiationChange =
        (selectedOptions) => {
            setContractNegotiation(selectedOptions)
        };
    const handleLifecycleManagementChange =
        (selectedOptions) => {
            setLifecycleManagement(selectedOptions)
        };
    const handleClauseLibraryChange =
        (selectedOptions) => {
            setClauseLibrary(selectedOptions)
        };
    const handleFieldsCreationChange =
        (selectedOptions) => {
            setFieldsCreation(selectedOptions)
        };
    const handleTrackingAndValidityChange =
        (selectedOptions) => {
            setTrackingAndValidity(selectedOptions)
        };
    const handleDocumentManagementAndTemplatesChange =
        (selectedOptions) => {
            setDocumentManagementAndTemplates(selectedOptions)
        };
    const handleDocumentCapturingChange =
        (selectedOptions) => {
            setDocumentCapturing(selectedOptions)
        };
    const handleDocumentCreationAndTemplatesChange =
        (selectedOptions) => {
            setDocumentCreationAndTemplates(selectedOptions)
        };
    const handledDocumentCapturingChange2 =
        (selectedOptions) => {
            setDocumentCapturing2(selectedOptions)
        };
    const handleDocumentSearchAndNavigationChange =
        (selectedOptions) => {
            setDocumentSearchAndNavigation(selectedOptions)
        };
    const handleAuthenticationChange =
        (selectedOptions) => {
            setAuthentication(selectedOptions)
        };
    const handleTaskAllotmentChange =
        (selectedOptions) => {
            setTaskAllotment(selectedOptions)
        };
    const handleBudgetingExpenseAndTimeTrackingChange =
        (selectedOptions) => {
            setBudgetingExpenseAndTimeTracking(selectedOptions)
        };
    const handleClientManagementChange =
        (selectedOptions) => {
            setClientManagement(selectedOptions)
        };
    const handleInvoiceGenerationAndReviewChange =
        (selectedOptions) => {
            setInvoiceGenerationAndReview(selectedOptions)
        };
    const handleDataIdentificationAndCollectionChange =
        (selectedOptions) => {
            setDataIdentificationAndCollection(selectedOptions)
        };
    const handleSearchProcessingAndAnalysisChange =
        (selectedOptions) => {
            setSearchProcessingAndAnalysis(selectedOptions)
        };
    const handleReviewAndProductionChange =
        (selectedOptions) => {
            setReviewAndProduction(selectedOptions)
        };
    const handleLegalHoldManagementChange =
        (selectedOptions) => {
            setLegalHoldManagement(selectedOptions)
        };
    const handleIdeationAndCreationChange =
        (selectedOptions) => {
            setIdeationAndCreation(selectedOptions)
        };
    const handleLifecycleManagement2Change =
        (selectedOptions) => {
            setLifecycleManagement2(selectedOptions)
        };
    const handleSearchAndDiscoveryChange =
        (selectedOptions) => {
            setSearchAndDiscovery(selectedOptions)
        };
    const handleStorageAndRepositoryChange =
        (selectedOptions) => {
            setStorageAndRepository(selectedOptions)
        };
    const handleMatterLifecycleTrackingChange =
        (selectedOptions) => {
            setMatterLifecycleTracking(selectedOptions)
        };
    const handleCourtAndCaseSearchChange =
        (selectedOptions) => {
            setCourtAndCaseSearch(selectedOptions)
        };
    const handleBudgetExpenseAndTimeTracking2Change =
        (selectedOptions) => {
            setBudgetExpenseAndTimeTracking2(selectedOptions)
        };
    const handleLitigationDocketingFeaturesChange =
        (selectedOptions) => {
            setLitigationDocketingFeatures(selectedOptions)
        };
    const handleWorkflowDesignAndConfigurationChange =
        (selectedOptions) => {
            setWorkflowDesignAndConfiguration(selectedOptions)
        };
    const handleAssignmentAllotmentAndTrackingChange =
        (selectedOptions) => {
            setAssignmentAllotmentAndTracking(selectedOptions)
        };
    const handleDocumentCreationAndManagementChange =
        (selectedOptions) => {
            setDocumentCreationAndManagement(selectedOptions)
        };
    const handleLawsComplianceAndRegulatoryTracking2Change =
        (selectedOptions) => {
            setLawsComplianceAndRegulatoryTracking2(selectedOptions)
        };


    const handleIndustriesChange =
        (selectedOptions) => {
            setIndustries(selectedOptions)
        };
    const handleClientTeamSizeChange =
        (selectedOptions) => {
            setClientTeamSize(selectedOptions)
        };
    const handleDemoDataChange =
        (selectedOptions) => {
            setDemoData(selectedOptions)
        };
    const handleSupportDataChange =
        (selectedOptions) => {
            setSupportData(selectedOptions)
        };
    const handleTrainingDataChange =
        (selectedOptions) => {
            setTrainingData(selectedOptions)
        };
    const handlePracticeAreasChange =
        (selectedOptions) => {
            setPracticeAreas(selectedOptions)
        };
    const handleSecondTestimonial = (e) => {
        e.preventDefault();
        setIsSecondTestimonial(true);
    }
    const handleSecondPlan = (e) => {
        e.preventDefault();
        setIsSecondPlan(true);
    }
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    const capitalizeFullName = (fullName) => {
        const words = fullName.split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = capitalizeFirstLetter(words[i]);
        }
        return words.join(' ');
    }

    return (
        <>
            <div className="products">
                {/* {
            dataItem && dataItem.map((item) => (
                <div className="productInfo">
                    Name Of Company : { item.name} 
                    Category : { item.category} 
                    Deployment :  { item.deployment} 
                    
                    Mobile Accessibility : {item.accessibility}
                    
                    Focus Countries : {item.country}
                    
                    Average Adoption Time : {item.adoptionTime}
                </div>
            ))
        } */}
            </div>
            <div className="addProducts">
                <form action="" method='post' onSubmit={submitHandler}>
                    <div className="category">
                        <h1>Product Information</h1>

                        <div className="inputfield">
                            Name of the Product &nbsp;
                            <input type="text" placeholder='Enter product name' value={capitalizeFullName(name)} onChange={(e) => setName(e.target.value)} autoCapitalize='' /> </div>

                        <div className="inputfield">
                            Overview (Up to 150 words)
                            <textarea type="text" placeholder='Enter Overview' maxLength={1000} value={capitalizeFirstLetter(overview)} onChange={(e) => setOverview(e.target.value)} rows={9} cols={50} /></div>

                        <div className="inputfield">
                            What is your unique selling proposition? (Up to 200 words)
                            <textarea type="text" placeholder='Enter unique selling proposition' value={capitalizeFirstLetter(uniqueSellingProposition)} onChange={(e) => setUniqueSellingProposition(e.target.value)} maxLength={1500} rows={9} cols={50} /></div>

                        <div className="inputfield">
                            Category

                            <Select options={categoryOptions} placeholder={"Select Category "} value={category} onChange={handleCategoryChange}
                                isMulti={true}
                            /> </div>

                        <div className="inputfield">
                            Deployment
                            <Select options={deploymentOptions} placeholder={"Select Deployment "} value={deployment} onChange={handleDeploymentChange}
                                isMulti={true}
                            /></div>


                        <div className="inputfield">
                            Mobile Accessibility
                            <div className="inputOptions">

                                <input type="radio" name="Accessibility" id="accessibility" checked={accessibility === true}
                                    onChange={() => setAccessibility(true)} /> Yes
                                <input type="radio" name="Accessibility" id="accessibility" checked={!accessibility}
                                    onChange={() => setAccessibility(false)} />No </div> </div>


                        <div className="inputfield">
                            Average adoption time &nbsp;
                            <div className="inputOptions2">
                                <input type="text"
                                    value={adoptionTime}
                                    onChange={(e) => setAdoptionTime(e.target.value)}
                                    min={0} />
                                <Select placeholder={"Select Period"}
                                    options={timeSelectionOptions} value={adoptionTimeSelected}
                                    onChange={(selectedOptions) => setAdoptionTimeSelected(selectedOptions)}

                                /> </div> </div>

                        <div className="inputfield">
                            Focus Countries
                            <Select options={countryOptions}
                                placeholder={"Maximum 5 "} value={country} onChange={handleCountryChange}
                                isMulti={true}
                            /></div>


                        <div className="inputfield">
                            Languages
                            <Select options={languageOptions} placeholder={"Select Language "} value={language} onChange={handleLanguageChange}
                                isMulti={true}
                            /></div>
                    </div>



                    <div className="category">
                        <h1>Target customers</h1>

                        <div className="inputfield">
                            Customer segment
                            <Select options={customerSegmentOptions} placeholder={"Select Customer Segment "} value={customerSegment} onChange={handleCustomerSegmentChange}
                                isMulti={true}
                            /></div>

                        {individualPractitioners &&
                            <div className="inputfield">
                                Individual Practitioners
                                <input type="number" placeholder='' value={individualPractitionersPercentage} onChange={(e) => setIndividualPractitionersPercentage(e.target.value)} min={0} max={100} />
                            </div>}
                        {lawFirms &&
                            <div className="inputfield">
                                Law firms
                                <input type="number" placeholder='' value={lawFirmsPercentage} onChange={(e) => setLawFirmsPercentage(e.target.value)} min={0} max={100} />
                            </div>}
                        {inHouseLegalDepartments &&
                            <div className="inputfield">
                                In-house legal departments
                                <input type="number" placeholder='' value={inHouseLegalDepartmentsPercentage} onChange={(e) => setInHouseLegalDepartmentsPercentage(e.target.value)} min={0} max={100} />
                            </div>}
                        {enterprises &&
                            <div className="inputfield">
                                Enterprises
                                <input type="number" placeholder='' value={enterprisesPercentage} onChange={(e) => setEnterprisesPercentage(e.target.value)} min={0} max={100} />
                            </div>}
                        {judiciary &&
                            <div className="inputfield">
                                Judiciary
                                <input type="number" placeholder='' value={judiciaryPercentage} onChange={(e) => setJudiciaryPercentage(e.target.value)} min={0} max={100} />
                            </div>}
                        {governmentDepartments &&
                            <div className="inputfield">
                                Government Departments
                                <input type="number" placeholder='' value={governmentDepartmentsPercentage} onChange={(e) => setGovernmentDepartmentsPercentage(e.target.value)} min={0} max={100} />
                            </div>}
                        {startups &&
                            <div className="inputfield">
                                Startups
                                <input type="number" placeholder='' value={startupsPercentage} onChange={(e) => setStartupsPercentage(e.target.value)} min={0} max={100} />
                            </div>}


                        <div className="inputfield">
                            Industries
                            <Select options={industryOptions} placeholder={"Select Industry  "} value={industries} onChange={handleIndustriesChange}
                                isMulti={true}
                            /></div>

                        <div className="inputfield">
                            What are the practice areas your product can work into?

                            <Select options={practiceAreaOptions} placeholder={"Select Practice Areas "} value={practiceAreas} onChange={handlePracticeAreasChange} isMulti={true} /></div>

                        <div className="inputfield">
                            Client's team size
                            <Select options={clientTeamSizeOptions} placeholder={"Select Client's team size "} value={clientTeamSize} onChange={handleClientTeamSizeChange}
                                isMulti={true}
                            /></div>
                    </div>

                    <div className="category">
                        <h1>Features</h1>
                        {/* <h3>Common to all</h3> */}
                        <div >
                            <h3> Internal Collaboration</h3>
                            <div className="inputfield">
                                Messaging and Communication
                                <div className="inputOptions">

                                    <input type="radio" name="internalMessagingAndCommunication" id="internalMessagingAndCommunication" checked={internalMessagingAndCommunication === true}
                                        onChange={() => setInternalMessagingAndCommunication(true)} /> Yes
                                    <input type="radio" name="internalMessagingAndCommunication" id="internalMessagingAndCommunication" checked={!internalMessagingAndCommunication}
                                        onChange={() => setInternalMessagingAndCommunication(false)} />No
                                </div>



                            </div>

                            <div className="inputfield">
                                Notification
                                <div className="inputOptions">

                                    <input type="radio" name="internalNotification" id="internalNotification" checked={internalNotification === true}
                                        onChange={() => setInternalNotification(true)} /> Yes
                                    <input type="radio" name="internalNotification" id="internalNotification" checked={!internalNotification}
                                        onChange={() => setInternalNotification(false)} />No
                                </div>


                            </div>


                            <div className="inputOptions">

                                <input type="radio" name="internalDocumentSharing" id="internalDocumentSharing" checked={internalDocumentSharing === true}
                                    onChange={() => setInternalDocumentSharing(true)} /> Yes
                                <input type="radio" name="internalDocumentSharing" id="internalDocumentSharing" checked={!internalDocumentSharing}
                                    onChange={() => setInternalDocumentSharing(false)} />No </div>


                            <div className="inputfield">
                                Real Time Document Editing
                                <div className="inputOptions">

                                    <input type="radio" name="internalRealTimeDocumentEditing" id="internalRealTimeDocumentEditing" checked={internalRealTimeDocumentEditing === true}
                                        onChange={() => setInternalRealTimeDocumentEditing(true)} /> Yes
                                    <input type="radio" name="internalRealTimeDocumentEditing" id="internalRealTimeDocumentEditing" checked={!internalRealTimeDocumentEditing}
                                        onChange={() => setInternalRealTimeDocumentEditing(false)} />No </div>


                            </div>


                        </div>

                        <div>
                            <h3>External Collaboration</h3>
                            <div className="inputfield">
                                Messaging and Communication

                                <div className="inputOptions">
                                    <input type="radio" name="externalMessagingAndCommunication" id="externalMessagingAndCommunication" checked={externalMessagingAndCommunication === true}
                                        onChange={() => setExternalMessagingAndCommunication(true)} /> Yes
                                    <input type="radio" name="externalMessagingAndCommunication" id="externalMessagingAndCommunication" checked={!externalMessagingAndCommunication}
                                        onChange={() => setExternalMessagingAndCommunication(false)} />No
                                </div>

                            </div>

                            <div className="inputfield">
                                Notification

                                <div className="inputOptions">
                                    <input type="radio" name="externalNotification" id="externalNotification" checked={externalNotification === true}
                                        onChange={() => setExternalNotification(true)} /> Yes
                                    <input type="radio" name="externalNotification" id="externalNotification" checked={!externalNotification}
                                        onChange={() => setExternalNotification(false)} />No
                                </div>

                            </div>

                            <div className="inputfield">
                                Document Sharing

                                <div className="inputOptions">
                                    <input type="radio" name="externalDocumentSharing" id="externalDocumentSharing" checked={externalDocumentSharing === true}
                                        onChange={() => setExternalDocumentSharing(true)} /> Yes
                                    <input type="radio" name="externalDocumentSharing" id="externalDocumentSharing" checked={!externalDocumentSharing}
                                        onChange={() => setExternalDocumentSharing(false)} />No
                                </div>

                            </div>

                            <div className="inputfield">
                                Real Time Document Editing

                                <div className="inputOptions">
                                    <input type="radio" name="externalRealTimeDocumentEditing" id="externalRealTimeDocumentEditing" checked={externalRealTimeDocumentEditing === true}
                                        onChange={() => setExternalRealTimeDocumentEditing(true)} /> Yes
                                    <input type="radio" name="externalRealTimeDocumentEditing" id="externalRealTimeDocumentEditing" checked={!externalRealTimeDocumentEditing}
                                        onChange={() => setExternalRealTimeDocumentEditing(false)} />No
                                </div>


                            </div>

                            <div >
                                <h3> Analytics and Reporting</h3>

                                <div className="inputfield">
                                    Analytics Dashboard
                                    <div className="inputOptions">
                                        <input type="radio" name="analyticsDashboard" id="analyticsDashboard" checked={analyticsDashboard === true}
                                            onChange={() => setAnalyticsDashboard(true)} /> Yes
                                        <input type="radio" name="analyticsDashboard" id="analyticsDashboard" checked={!analyticsDashboard}
                                            onChange={() => setAnalyticsDashboard(false)} />No
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Report Generation
                                    <div className="inputOptions">
                                        <input type="radio" name="reportGeneration" id="reportGeneration" checked={reportGeneration === true}
                                            onChange={() => setReportGeneration(true)} /> Yes
                                        <input type="radio" name="reportGeneration" id="reportGeneration" checked={!reportGeneration}
                                            onChange={() => setReportGeneration(false)} />No
                                    </div>

                                </div>

                                <div className="inputfield">
                                    Dashboard Customization
                                    <div className="inputOptions">
                                        <input type="radio" name="dashboardCustomization" id="dashboardCustomization" checked={dashboardCustomization === true}
                                            onChange={() => setDashboardCustomization(true)} /> Yes
                                        <input type="radio" name="dashboardCustomization" id="dashboardCustomization" checked={!dashboardCustomization}
                                            onChange={() => setDashboardCustomization(false)} />No
                                    </div>
                                </div>
                                <div className="inputfield">
                                    Report Customization
                                    <div className="inputOptions">
                                        <input type="radio" name="reportCustomization" id="reportCustomization" checked={reportCustomization === true}
                                            onChange={() => setReportCustomization(true)} /> Yes
                                        <input type="radio" name="reportCustomization" id="reportCustomization" checked={!reportCustomization}
                                            onChange={() => setReportCustomization(false)} />No
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3>  Tool Administration and Control </h3>
                                <div className="inputfield">
                                    Multiple User Role
                                    <div className="inputOptions">
                                        <input type="radio" name="multipleUserRole" id="multipleUserRole" checked={multipleUserRole === true}
                                            onChange={() => setMultipleUserRole(true)} /> Yes
                                        <input type="radio" name="multipleUserRole" id="multipleUserRole" checked={!multipleUserRole}
                                            onChange={() => setMultipleUserRole(false)} />No
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Granular Permission
                                    <div className="inputOptions">
                                        <input type="radio" name="granularPermission" id="granularPermission" checked={granularPermission === true}
                                            onChange={() => setGranularPermission(true)} /> Yes
                                        <input type="radio" name="granularPermission" id="granularPermission" checked={!granularPermission}
                                            onChange={() => setGranularPermission(false)} />No
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Information Access Control
                                    <div className="inputOptions">
                                        <input type="radio" name="informationAccessControl" id="informationAccessControl" checked={informationAccessControl === true}
                                            onChange={() => setInformationAccessControl(true)} /> Yes
                                        <input type="radio" name="informationAccessControl" id="informationAccessControl" checked={!informationAccessControl}
                                            onChange={() => setInformationAccessControl(false)} />No
                                    </div>

                                </div>

                                <div className="inputfield">
                                    Role Based Access Control
                                    <div className="inputOptions">
                                        <input type="radio" name="roleBasedAccessControl" id="roleBasedAccessControl" checked={roleBasedAccessControl === true}
                                            onChange={() => setRoleBasedAccessControl(true)} /> Yes
                                        <input type="radio" name="roleBasedAccessControl" id="roleBasedAccessControl" checked={!roleBasedAccessControl}
                                            onChange={() => setRoleBasedAccessControl(false)} />No
                                    </div>

                                </div>
                            </div>
                            </div>


                            {clientManagementSoftware && (<div> <h3>Client Management Software</h3>
                                <div className="inputfield">
                                    Intake and Lead Management
                                    <Select
                                        options={clientManagementSoftwareOptions.intakeAndLeadManagement}
                                        value={intakeAndLeadManagement}
                                        onChange={handleIntakeAndLeadManagementChange}
                                        isMulti={true}
                                    /></div>

                                <div className="inputfield">
                                    Client portal
                                    <Select
                                        options={clientManagementSoftwareOptions.clientPortal}
                                        value={clientPortal}
                                        onChange={handleClientPortalChange}
                                        isMulti={true}
                                    /></div>

                                <div className="inputfield">
                                    Document management
                                    <Select
                                        options={clientManagementSoftwareOptions.documentManagement}
                                        value={documentManagement}
                                        onChange={handleDocumentManagementChange}
                                        isMulti={true}
                                    /></div>

                                <div className="inputfield">
                                    Case Alerts
                                    <Select
                                        options={clientManagementSoftwareOptions.caseAlerts}
                                        value={caseAlerts}
                                        onChange={handleCaseAlertsChange}
                                        isMulti={true}
                                    /> </div>
                                <div className="inputfield">
                                    Budget, Expense and time tracking
                                    <Select
                                        options={clientManagementSoftwareOptions.budgetExpenseAndTimeTracking}
                                        value={budgetExpenseAndTimeTracking}
                                        onChange={handleBudgetExpenseAndTimeTrackingChange}
                                        isMulti={true}
                                    /> </div>

                                <div className="inputfield">
                                    Client billing and invoicing
                                    <Select
                                        options={clientManagementSoftwareOptions.clientBillingAndInvoicing}
                                        value={clientBillingAndInvoicing}
                                        onChange={handleClientBillingAndInvoicingChange}
                                        isMulti={true}
                                    /></div>
                            </div>)}


                            {complianceAndRiskManagement && (<div>
                                <h3>Compliance and Risk Management</h3>
                                <div className="inputfield">
                                    Policy Management
                                    <Select
                                        options={complianceAndRiskManagementOptions.policyManagement}
                                        value={policyManagement}
                                        onChange={handlePolicyManagementChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Issue Management
                                    <Select
                                        options={complianceAndRiskManagementOptions.issueManagement}
                                        value={issueManagement}
                                        onChange={handleIssueManagementChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Laws, Compliance and Regulatory tracking
                                    <Select
                                        options={complianceAndRiskManagementOptions.lawsComplianceAndRegulatoryTracking}
                                        value={lawsComplianceAndRegulatoryTracking}
                                        onChange={handleLawsComplianceAndRegulatoryTrackingChange}
                                        isMulti={true}
                                    /></div>

                            </div>)}
                            {contractManagementSoftware && (<div> <h3>Contract Management Software</h3>
                                <div className="inputfield">
                                    Contract creation and Authoring
                                    <Select
                                        options={contractManagementSoftwareOptions.contractCreationAndAuthoring}
                                        value={contractCreationAndAuthoring}
                                        onChange={handleContractCreationAndAuthoringChange}
                                        isMulti={true}
                                    /></div>

                                <div className="inputfield">
                                    Contract Repository
                                    <Select
                                        options={contractManagementSoftwareOptions.contractRepository}
                                        value={contractRepository}
                                        onChange={handleContractRepositoryChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Contract Negotiation
                                    <Select
                                        options={contractManagementSoftwareOptions.contractNegotiation}
                                        value={contractNegotiation}
                                        onChange={handleContractNegotiationChange}
                                        isMulti={true}
                                    /></div>

                                <div className="inputfield">
                                    Lifecycle Management
                                    <Select
                                        options={contractManagementSoftwareOptions.lifecycleManagement}
                                        value={lifecycleManagement}
                                        onChange={handleLifecycleManagementChange}
                                        isMulti={true}
                                    /></div>

                                <div className="inputfield">
                                    Clause library
                                    <Select
                                        options={contractManagementSoftwareOptions.clauseLibrary}
                                        value={clauseLibrary}
                                        onChange={handleClauseLibraryChange}
                                        isMulti={true}
                                    /></div>

                            </div>)}



                            {digitalSignature && (<div> <h3>Digital Signature</h3>
                                <div className="inputfield">
                                    Fields creation
                                    <Select
                                        options={digitalSignatureOptions.fieldsCreation}
                                        value={fieldsCreation}
                                        onChange={handleFieldsCreationChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Tracking and validity
                                    <Select
                                        options={digitalSignatureOptions.trackingAndValidity}
                                        value={trackingAndValidity}
                                        onChange={handleTrackingAndValidityChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Document management and Templates
                                    <Select
                                        options={digitalSignatureOptions.documentManagementAndTemplates}
                                        value={documentManagementAndTemplates}
                                        onChange={handleDocumentManagementAndTemplatesChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Document capturing
                                    <Select
                                        options={digitalSignatureOptions.documentCapturing}
                                        value={documentCapturing}
                                        onChange={handleDocumentCapturingChange}
                                        isMulti={true}
                                    /></div>


                            </div>)}
                            {documentManagementAndAutomation && (<div> <h3>Document Management and Automation</h3>
                                <div className="inputfield">
                                    Document Creation and templates
                                    <Select
                                        options={documentManagementAndAutomationOptions.documentCreationAndTemplates}
                                        value={documentCreationAndTemplates}
                                        onChange={handleDocumentCreationAndTemplatesChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Document capturing
                                    <Select
                                        options={documentManagementAndAutomationOptions.documentCapturing}
                                        value={documentCapturing2}
                                        onChange={handledDocumentCapturingChange2}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Document search and navigation
                                    <Select
                                        options={documentManagementAndAutomationOptions.documentSearchAndNavigation}
                                        value={documentSearchAndNavigation}
                                        onChange={handleDocumentSearchAndNavigationChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Authentication
                                    <Select
                                        options={documentManagementAndAutomationOptions.authentication}
                                        value={authentication}
                                        onChange={handleAuthenticationChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Task allotment
                                    <Select
                                        options={documentManagementAndAutomationOptions.taskAllotment}
                                        value={taskAllotment}
                                        onChange={handleTaskAllotmentChange}
                                        isMulti={true}
                                    /></div>


                            </div>)}
                            {EBillingAndInvoicing && (<div> <h3>E-billing and Invoicing</h3>
                                <div className="inputfield">
                                    Budgeting, Expense and time tracking
                                    <Select
                                        options={EBillingAndInvoicingOptions.budgetingExpenseAndTimeTracking}
                                        value={budgetingExpenseAndTimeTracking}
                                        onChange={handleBudgetingExpenseAndTimeTrackingChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Client management
                                    <Select
                                        options={EBillingAndInvoicingOptions.clientManagement}
                                        value={clientManagement}
                                        onChange={handleClientManagementChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Invoice generation and review
                                    <Select
                                        options={EBillingAndInvoicingOptions.invoiceGenerationAndReview}
                                        value={invoiceGenerationAndReview}
                                        onChange={handleInvoiceGenerationAndReviewChange}
                                        isMulti={true}
                                    /></div>
                            </div>)}
                            {eDiscovery && (<div> <h3>E-discovery</h3>
                                <div className="inputfield">
                                    Data identification and collection
                                    <Select
                                        options={EDiscoveryOptions.dataIdentificationAndCollection}
                                        value={dataIdentificationAndCollection}
                                        onChange={handleDataIdentificationAndCollectionChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Search, Processing and Analysis
                                    <Select
                                        options={EDiscoveryOptions.searchProcessingAndAnalysis}
                                        value={searchProcessingAndAnalysis}
                                        onChange={handleSearchProcessingAndAnalysisChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Review and Production
                                    <Select
                                        options={EDiscoveryOptions.reviewAndProduction}
                                        value={reviewAndProduction}
                                        onChange={handleReviewAndProductionChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Legal Hold management
                                    <Select
                                        options={EDiscoveryOptions.legalHoldManagement}
                                        value={legalHoldManagement}
                                        onChange={handleLegalHoldManagementChange}
                                        isMulti={true}
                                    /></div>
                            </div>)}
                            {intellectualPropertyManagement && (<div> <h3> Intellectual Property Management</h3>
                                <div className="inputfield">
                                    Ideation and creation
                                    <Select
                                        options={intellectualPropertyManagementOptions.ideationAndCreation}
                                        value={ideationAndCreation}
                                        onChange={handleIdeationAndCreationChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Lifecycle Management
                                    <Select
                                        options={intellectualPropertyManagementOptions.lifecycleManagement2}
                                        value={lifecycleManagement2}
                                        onChange={handleLifecycleManagement2Change}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Search and Discovery
                                    <Select
                                        options={intellectualPropertyManagementOptions.searchAndDiscovery}
                                        value={searchAndDiscovery}
                                        onChange={handleSearchAndDiscoveryChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Storage and Repository
                                    <Select
                                        options={intellectualPropertyManagementOptions.storageAndRepository}
                                        value={storageAndRepository}
                                        onChange={handleStorageAndRepositoryChange}
                                        isMulti={true}
                                    /></div>
                            </div>)}
                            {litigationManagementAndAnalytics && (<div> <h3>Litigation Management and Analytics</h3>
                                <div className="inputfield">
                                    Matter lifecycle tracking
                                    <Select
                                        options={litigationManagementAndAnalyticsOptions.matterLifecycleTracking}
                                        value={matterLifecycleTracking}
                                        onChange={handleMatterLifecycleTrackingChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Court and case search
                                    <Select
                                        options={litigationManagementAndAnalyticsOptions.courtAndCaseSearch}
                                        value={courtAndCaseSearch}
                                        onChange={handleCourtAndCaseSearchChange}
                                        isMulti={true}
                                    /></div>

                                <div className="inputfield">
                                    Budget, Expense and time tracking
                                    <Select
                                        options={litigationManagementAndAnalyticsOptions.budgetExpenseAndTimeTracking2}
                                        value={budgetExpenseAndTimeTracking2}
                                        onChange={handleBudgetExpenseAndTimeTracking2Change}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Litigation docketing features
                                    <Select
                                        options={litigationManagementAndAnalyticsOptions.litigationDocketingFeatures}
                                        value={litigationDocketingFeatures}
                                        onChange={handleLitigationDocketingFeaturesChange}
                                        isMulti={true}
                                    /></div>
                            </div>)}
                            {legalWorkflowAutomation && (<div> <h3>Legal Workflow Automation</h3>
                                <div className="inputfield">
                                    Workflow design and configuration
                                    <Select
                                        options={legalWorkflowAutomationOptions.workflowDesignAndConfiguration}
                                        value={workflowDesignAndConfiguration}
                                        onChange={handleWorkflowDesignAndConfigurationChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Assignment allotment and tracking
                                    <Select
                                        options={legalWorkflowAutomationOptions.assignmentAllotmentAndTracking}
                                        value={assignmentAllotmentAndTracking}
                                        onChange={handleAssignmentAllotmentAndTrackingChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Document creation and management
                                    <Select
                                        options={legalWorkflowAutomationOptions.documentCreationAndManagement}
                                        value={documentCreationAndManagement}
                                        onChange={handleDocumentCreationAndManagementChange}
                                        isMulti={true}
                                    /></div>
                                <div className="inputfield">
                                    Laws, Compliance and Regulatory tracking
                                    <Select
                                        options={legalWorkflowAutomationOptions.lawsComplianceAndRegulatoryTracking2}
                                        value={lawsComplianceAndRegulatoryTracking2}
                                        onChange={handleLawsComplianceAndRegulatoryTracking2Change}
                                        isMulti={true}
                                    /></div>
                            </div>)}
                        </div>

                        <div className="category">
                            <h1>Process Coverage</h1>
                                <h3>Select Category to see further options</h3>
                            {clientManagementSoftware && <div>
                                <h3>Client Management Software</h3>
                                <div className="inputfield">
                                    Intake
                                    <div className="inputOptions2">
                                        <input
                                            type="checkbox"
                                            checked={intake}
                                            onChange={() => setIntake(!intake)}
                                        />
                                        <label htmlFor="isChecked"> {intake ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>
                                <div className="inputfield">
                                    Assessment
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={assessment} onChange={() => setAssessment(!assessment)} />
                                        <label htmlFor="isChecked">{assessment ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Strategize
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={strategize} onChange={() => setStrategize(!strategize)} />
                                        <label htmlFor="isChecked">{strategize ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Represent
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={represent} onChange={() => setRepresent(!represent)} />
                                        <label htmlFor="isChecked">{represent ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Communication
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={communication} onChange={() => setCommunication(!communication)} />
                                        <label htmlFor="isChecked">{communication ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Review
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={review} onChange={() => setReview(!review)} />
                                        <label htmlFor="isChecked">{review ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>
                            </div>
                            }
                            {complianceAndRiskManagement && <div>
                                <h3>Compliance and Risk Management
                                    Software</h3>
                                <div className="inputfield">
                                    Coverage
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={coverage} onChange={() => setCoverage(!coverage)} />
                                        <label htmlFor="isChecked">{coverage ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>
                                <div className="inputfield">
                                    Assessment
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={crmAssessment} onChange={() => setCrmAssessment(!crmAssessment)} />
                                        <label htmlFor="isChecked">{crmAssessment ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Validation
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={validation} onChange={() => setValidation(!validation)} />
                                        <label htmlFor="isChecked">{validation ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Implementation
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={implementation} onChange={() => setImplementation(!implementation)} />
                                        <label htmlFor="isChecked">{implementation ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Monitoring
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={monitoring} onChange={() => setMonitoring(!monitoring)} />
                                        <label htmlFor="isChecked">{monitoring ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Analysis
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={analysis} onChange={() => setAnalysis(!analysis)} />
                                        <label htmlFor="isChecked">{analysis ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>
                            </div>
                            }
                            {contractManagementSoftware && <div>
                                <h3>Contract Management Software</h3>
                                <div className="inputfield">
                                    Create
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={create} onChange={() => setCreate(!create)} />
                                        <label htmlFor="isChecked">{create ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Negotiation
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={negotiation} onChange={() => setNegotiation(!negotiation)} />
                                        <label htmlFor="isChecked">{negotiation ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Authentication
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={cmsAuthentication} onChange={() => setCmsAuthentication(!cmsAuthentication)} />
                                        <label htmlFor="isChecked">{cmsAuthentication ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Execute
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={execute} onChange={() => setExecute(!execute)} />
                                        <label htmlFor="isChecked">{execute ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Store
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={store} onChange={() => setStore(!store)} />
                                        <label htmlFor="isChecked">{store ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Tracking
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={tracking} onChange={() => setTracking(!tracking)} />
                                        <label htmlFor="isChecked">{tracking ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                            </div>
                            }
                            {digitalSignature && <div>
                                <h3>Digital Signature</h3>
                                <div className="inputfield">
                                    Document Preparation
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={documentPreparation} onChange={() => setDocumentPreparation(!documentPreparation)} />
                                        <label htmlFor="isChecked">{documentPreparation ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Authentication
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={dsAuthentication} onChange={() => setDsAuthentication(!dsAuthentication)} />
                                        <label htmlFor="isChecked">{dsAuthentication ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Signing
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={signing} onChange={() => setSigning(!signing)} />
                                        <label htmlFor="isChecked">{signing ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Encryption
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={encryption} onChange={() => setEncryption(!encryption)} />
                                        <label htmlFor="isChecked">{encryption ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Verification
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={verification} onChange={() => setVerification(!verification)} />
                                        <label htmlFor="isChecked">{verification ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>


                                <div className="inputfield">
                                    Distribution
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={distribution} onChange={() => setDistribution(!distribution)} />
                                        <label htmlFor="isChecked">{distribution ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                            </div>
                            }
                            {documentManagementAndAutomation && <div>
                                <h3>Document Management and
                                    Automation Software</h3>
                                <div className="inputfield">
                                    Capture
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={capture} onChange={() => setCapture(!capture)} />
                                        <label htmlFor="isChecked">{capture ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Change Management
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={changeManagement} onChange={() => setChangeManagement(!changeManagement)} />
                                        <label htmlFor="isChecked">{changeManagement ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Review
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={documentReview} onChange={() => setDocumentReview(!documentReview)} />
                                        <label htmlFor="isChecked">{documentReview ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Organize
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={organize} onChange={() => setOrganize(!organize)} />
                                        <label htmlFor="isChecked">{organize ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Access Management
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={accessManagement} onChange={() => setAccessManagement(!accessManagement)} />
                                        <label htmlFor="isChecked">{accessManagement ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Retrieval
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={retrieval} onChange={() => setRetrieval(!retrieval)} />
                                        <label htmlFor="isChecked">{retrieval ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>
                            </div>
                            }
                            {EBillingAndInvoicing && <div>
                                <h3>E-billing and Invoicing</h3>
                                <div className="inputfield">
                                    Invoice Generation
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={invoiceGeneration} onChange={() => setInvoiceGeneration(!invoiceGeneration)} />
                                        <label htmlFor="isChecked">{invoiceGeneration ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Authorization
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={authorization} onChange={() => setAuthorization(!authorization)} />
                                        <label htmlFor="isChecked">{authorization ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Distribution and Accessibility
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={distributionAndAccessibility} onChange={() => setDistributionAndAccessibility(!distributionAndAccessibility)} />
                                        <label htmlFor="isChecked">{distributionAndAccessibility ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Payment Facilitation
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={paymentFacilitation} onChange={() => setPaymentFacilitation(!paymentFacilitation)} />
                                        <label htmlFor="isChecked">{paymentFacilitation ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Tracking
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={eBillTracking} onChange={() => setEBillTracking(!eBillTracking)} />
                                        <label htmlFor="isChecked">{eBillTracking ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>
                                <div className="inputfield">
                                    Analysis
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={eBillAnalysis} onChange={() => setEBillAnalysis(!eBillAnalysis)} />
                                        <label htmlFor="isChecked">{eBillAnalysis ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>
                            </div>
                            }
                            {eDiscovery && <div>
                                <h3>E-discovery</h3>
                                <div className="inputfield">
                                    Discover
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={discover} onChange={() => setDiscover(!discover)} />
                                        <label htmlFor="isChecked">{discover ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Preserve
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={preserve} onChange={() => setPreserve(!preserve)} />
                                        <label htmlFor="isChecked">{preserve ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Acquire
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={acquire} onChange={() => setAcquire(!acquire)} />
                                        <label htmlFor="isChecked">{acquire ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Examine
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={examine} onChange={() => setExamine(!examine)} />
                                        <label htmlFor="isChecked">{examine ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Evaluate
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={evaluate} onChange={() => setEvaluate(!evaluate)} />
                                        <label htmlFor="isChecked">{evaluate ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Present
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={present} onChange={() => setPresent(!present)} />
                                        <label htmlFor="isChecked">{present ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>
                            </div>
                            }
                            {intellectualPropertyManagement && <div>
                                <h3>Intellectual Property Management Software</h3>
                                <div className="inputfield">
                                    Cataloging
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={cataloging} onChange={() => setCataloging(!cataloging)} />
                                        <label htmlFor="isChecked">{cataloging ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Analysis
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={ipAnalysis} onChange={() => setIpAnalysis(!ipAnalysis)} />
                                        <label htmlFor="isChecked">{ipAnalysis ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Protection
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={protection} onChange={() => setProtection(!protection)} />
                                        <label htmlFor="isChecked">{protection ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Monitoring
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={ipMonitoring} onChange={() => setIpMonitoring(!ipMonitoring)} />
                                        <label htmlFor="isChecked">{ipMonitoring ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Enforcement
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={enforcement} onChange={() => setEnforcement(!enforcement)} />
                                        <label htmlFor="isChecked">{enforcement ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Reporting
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={reporting} onChange={() => setReporting(!reporting)} />
                                        <label htmlFor="isChecked">{reporting ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>
                            </div>
                            }
                            {litigationManagementAndAnalytics && <div>
                                <h3>Litigation Management and analytics</h3>
                                <div className="inputfield">
                                    Intake
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={litigationIntake} onChange={() => setLitigationIntake(!litigationIntake)} />
                                        <label htmlFor="isChecked">{litigationIntake ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Strategize
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={litigationStrategize} onChange={() => setLitigationStrategize(!litigationStrategize)} />
                                        <label htmlFor="isChecked">{litigationStrategize ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Preparation
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={litigationPreparation} onChange={() => setLitigationPreparation(!litigationPreparation)} />
                                        <label htmlFor="isChecked">{litigationPreparation ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Litigation Support
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={litigationSupport} onChange={() => setLitigationSupport(!litigationSupport)} />
                                        <label htmlFor="isChecked">{litigationSupport ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>
                                <div className="inputfield">
                                    Analytics
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={analytics} onChange={() => setAnalytics(!analytics)} />
                                        <label htmlFor="isChecked">{analytics ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Outcome Evaluation
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={outcomeEvaluation} onChange={() => setOutcomeEvaluation(!outcomeEvaluation)} />
                                        <label htmlFor="isChecked">{outcomeEvaluation ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>
                            </div>
                            }
                            {legalWorkflowAutomation && <div>
                                <h3>Legal Workflow Automation
                                </h3>
                                <div className="inputfield">
                                    Process Identification
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={processIdentification} onChange={() => setProcessIdentification(!processIdentification)} />
                                        <label htmlFor="isChecked">{processIdentification ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Workflow Configuration
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={workflowConfiguration} onChange={() => setWorkflowConfiguration(!workflowConfiguration)} />
                                        <label htmlFor="isChecked">{workflowConfiguration ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Validation
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={workflowValidation} onChange={() => setWorkflowValidation(!workflowValidation)} />
                                        <label htmlFor="isChecked">{workflowValidation ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Implementation
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={workflowImplementation} onChange={() => setWorkflowImplementation(!workflowImplementation)} />
                                        <label htmlFor="isChecked">{workflowImplementation ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Tracking
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={workflowTracking} onChange={() => setWorkflowTracking(!workflowTracking)} />
                                        <label htmlFor="isChecked">{workflowTracking ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>

                                <div className="inputfield">
                                    Optimization
                                    <div className="inputOptions2">
                                        <input type="checkbox" checked={workflowOptimization} onChange={() => setWorkflowOptimization(!workflowOptimization)} />
                                        <label htmlFor="isChecked">{workflowOptimization ? "Checked" : "Unchecked"}</label>
                                    </div>
                                </div>
                            </div>
                            }

                        </div>


                        <div className="category">
                            <h1>Pricing Plan</h1>
                            <div className="inputfield">
                                Minimum Contract period &nbsp;
                                <div className="inputOptions2">
                                    <input type="number" placeholder='Enter Pricing Type' value={minimumContractPeriod} onChange={(e) => setMinimumContractPeriod(e.target.value)} /> <Select style={{ display: "inline" }} options={timeSelectionOptions} value={minimumContractPeriodSelected} placeholder={"Select period "} onChange={(selectedOptions) => setMinimumContractPeriodSelected(selectedOptions)}
                                    /></div> </div>
                            <div className="inputfield">
                                Free Trial
                                <div className="inputOptions">
                                    <input type="radio" name="freeTrial" id="freeTrial" checked={freeTrial === true}
                                        onChange={() => setFreeTrial(true)} /> Yes
                                    <input type="radio" name="freeTrial" id="freeTrial" checked={!freeTrial}
                                        onChange={() => setFreeTrial(false)} />No </div> </div>

                            <div className="inputfield">
                                Free Plan
                                <div className="inputOptions">
                                    <input type="radio" name="freePlan" id="freePlan" checked={freePlan === true}
                                        onChange={() => setFreePlan(true)} /> Yes
                                    <input type="radio" name="freePlan" id="freePlan" checked={!freePlan}
                                        onChange={() => setFreePlan(false)} />No </div>
                            </div>
                            <div className="inputfield">
                                How do you price your customers?
                                <div className="inputOptions">
                                    <input type="radio" name="customerPricing" id="customerPricing" checked={customerPricing === "fixed"}
                                        onChange={() => setCustomerPricing("fixed")} /> Fixed
                                    <input type="radio" name="customerPricing" id="customerPricing" checked={customerPricing === "custom"}
                                        onChange={() => setCustomerPricing("custom")} />Custom </div></div>
                            {
                                customerPricing === "fixed" && <div>
                                    <h3>Plan 1</h3>
                                    <div className="inputfield">
                                        Name of Plan
                                        <input type="text" placeholder='Enter Feature 1' value={nameOfPlans1} onChange={(e) => setNameOfPlans1(e.target.value)} /></div>

                                    <div className="inputfield">
                                        Pricing
                                        <input type="text" placeholder='Enter Feature 2' value={plan1Pricing} onChange={(e) => setPlan1Pricing(e.target.value)} /> </div>
                                    <div className="inputfield">   Parameter 1
                                        <input type="text" placeholder='Enter Feature 3' value={plan1Parameter1} onChange={(e) => setPlan1Parameter1(e.target.value)} /> </div>
                                    <div className="inputfield">   Parameter 2
                                        <input type="text" placeholder='Enter Feature 3' value={plan1Parameter2} onChange={(e) => setPlan1Parameter2(e.target.value)} /> </div>
                                    <div className="inputfield">   Note
                                        <input type="text" placeholder='Enter Feature 3' value={note1} onChange={(e) => setNote1(e.target.value)} /> </div>

                                </div>
                            }
                            {
                                customerPricing === "fixed" && <div>
                                    Add Another Plan
                                    <button
                                        value={isSecondPlan} onClick={handleSecondPlan}>Click Here</button>
                                </div>
                            }

                            {isSecondPlan && <div>
                                <h3>Plan 1</h3>
                                <div className="inputfield">
                                    Name of Plan
                                    <input type="text" placeholder='Enter Feature 1' value={nameOfPlans2} onChange={(e) => setNameOfPlans2(e.target.value)} /></div>
                                <div className="inputfield">
                                    Pricing
                                    <input type="text" placeholder='Enter Feature 2' value={plan1Pricing} onChange={(e) => setPlan2Pricing(e.target.value)} /> </div>
                                <div className="inputfield">   Parameter 1
                                    <input type="text" placeholder='Enter Feature 3' value={plan2Parameter1} onChange={(e) => setPlan2Parameter1(e.target.value)} /> </div>
                                <div className="inputfield">   Parameter 2
                                    <input type="text" placeholder='Enter Feature 3' value={plan2Parameter2} onChange={(e) => setPlan2Parameter2(e.target.value)} /> </div>
                                <div className="inputfield">   Note
                                    <input type="text" placeholder='Enter Feature 3' value={note2} onChange={(e) => setNote2(e.target.value)} />
                                </div>

                            </div>
                            }

                            {
                                customerPricing === "custom" && <div>
                                    <h3>
                                        Mention 6 parameters that highly impacts your pricing</h3>
                                    <div className="inputfield">
                                        Parameter 1:
                                        <input type="text" placeholder='Parameter 1' value={parameter1} onChange={(e) => setParameter1(e.target.value)} />
                                    </div>
                                    <div className="inputfield">
                                        Parameter 2:
                                        <input type="text" placeholder='Parameter 2' value={parameter2} onChange={(e) => setParameter2(e.target.value)} />
                                    </div>
                                    <div className="inputfield">
                                        Parameter 3:
                                        <input type="text" placeholder='Parameter 3' value={parameter3} onChange={(e) => setParameter3(e.target.value)} />
                                    </div>
                                    <div className="inputfield">
                                        Parameter 4:
                                        <input type="text" placeholder='Parameter 4' value={parameter4} onChange={(e) => setParameter4(e.target.value)} />
                                    </div>
                                    <div className="inputfield">
                                        Parameter 5:
                                        <input type="text" placeholder='Parameter 5' value={parameter5} onChange={(e) => setParameter5(e.target.value)} />
                                    </div>
                                    <div className="inputfield">
                                        Parameter 6:
                                        <input type="text" placeholder='Parameter 6' value={parameter6} onChange={(e) => setParameter6(e.target.value)} />
                                    </div>

                                </div>
                            }
                        </div>

                        <div className="category">
                            <h1>References</h1>
                            <div className="inputfield">
                                Video Link
                                <div className="checkInput">
                                    <input type="text" placeholder='Enter Youtube Video Link ' value={(videoLink)} onChange={(e) => {
                                        setVideoLink(e.target.value);
                                        const isValidUrl = isURL(e.target.value);
                                        setVideoLinkValid(isValidUrl)
                                    }} />
                                    {!videoLinkValid && <span>Invalid URL</span>}</div> </div>
                            {/* Images ( upto 5) */}
                            {/* <input type="text" /> */}
                            <div className="inputfield">
                                Know how
                                documents
                                <div className="checkInput">
                                    <input type="text" placeholder='Enter Document Link here' value={knowHowDocument1} onChange={(e) => {
                                        setKnowHowDocument1(e.target.value);
                                        const isValidUrl = isURL(e.target.value);
                                        setKnowHowDocument1Valid(isValidUrl)
                                    }} />
                                    {!knowHowDocument1Valid && <span>Invalid URL</span>}
                                </div></div>

                            {knowHowDocument1 && <div className="inputfield">
                                Document Link
                                <div className="checkInput">

                                    <input type="text" placeholder='If any' value={knowHowDocument2} onChange={(e) => {
                                        setKnowHowDocument2(e.target.value);
                                        const isValidUrl = isURL(e.target.value);
                                        setKnowHowDocument2Valid(isValidUrl)
                                    }} />
                                    {!knowHowDocument2Valid && <span>Invalid URL</span>}
                                </div>
                            </div>
                            }
                            {knowHowDocument1 && knowHowDocument2 && <div className="inputfield">
                                Document Link
                                <div className="checkInput">
                                    <input type="text" placeholder='If any' value={knowHowDocument3} onChange={(e) => {
                                        setKnowHowDocument3(e.target.value);
                                        const isValidUrl = isURL(e.target.value);
                                        setKnowHowDocument3Valid(isValidUrl)
                                    }} />

                                    {!knowHowDocument3Valid && <span>Invalid URL</span>}
                                </div></div>
                            }

                            <div className="inputfield">
                                Linkedin
                                <div className="checkInput">
                                    <input type="text" placeholder="Linkedin Link here" value={linkedIn} onChange={(e) => {
                                        setLinkedIn(e.target.value);
                                        const isValidUrl = isURL(e.target.value);
                                        setLinkedInValid(isValidUrl)
                                    }} />
                                    {!linkedInValid && <span>Invalid URL</span>} </div>
                            </div>
                            <div className="inputfield">
                                Instagram
                                <div className="checkInput">
                                    <input type="text" placeholder="Instagram Link here" value={instagram} onChange={(e) => {
                                        setInstagram(e.target.value);
                                        const isValidUrl = isURL(e.target.value);
                                        setInstagramValid(isValidUrl)
                                    }} />
                                    {!instagramValid && <span>Invalid URL</span>}</div></div>
                            <div className="inputfield">
                                X(Twitter)
                                <div className="checkInput">
                                    <input type="text" placeholder="X(Twitter)" value={twitter} onChange={(e) => {
                                        setTwitter(e.target.value);
                                        const isValidUrl = isURL(e.target.value);
                                        setTwitterValid(isValidUrl)
                                    }} />
                                    {!twitterValid && <span>Invalid URL</span>}</div></div>

                            <div className="inputfield">
                                Youtube
                                <div className="checkInput">
                                    <input type="text" placeholder="Youtube" value={youtube} onChange={(e) => {
                                        setYoutube(e.target.value);
                                        const isValidUrl = isURL(e.target.value);
                                        setYoutubeValid(isValidUrl)
                                    }} />
                                    {!youtubeValid && <span>Invalid URL</span>}</div></div>

                            <div className="inputfield">
                                Any Other Link
                                <div className="checkInput">
                                    <input type="text" placeholder="If any" value={otherLink} onChange={(e) => {
                                        setOtherLink(e.target.value);
                                        const isValidUrl = isURL(e.target.value);
                                        setOtherLinkValid(isValidUrl)
                                    }} />
                                    {!otherLinkValid && <span>Invalid URL</span>}</div></div>
                        </div>

                        <div className="category">
                            <h1>Services and Support</h1>
                            <div className="inputfield">
                                Demo
                                <Select
                                    options={demoOptions}
                                    value={demoData}
                                    onChange={handleDemoDataChange}
                                    placeholder={"Select Demo "}
                                    isMulti={true}
                                /></div>
                            <div className="inputfield">

                                Add demo link (if any)
                                <div className="checkInput"> <input type="text" placeholder='Enter Link if any' value={demoLink} onChange={(e) => {
                                    setDemoLink(e.target.value);
                                    const isValidUrl = isURL(e.target.value);
                                    setDemoLinkValid(isValidUrl)
                                }} />
                                    {!demoLinkValid && <span>Invalid URL</span>}</div></div>
                            {/* <input type="text" placeholder='Enter Practice Areas' value={demoNote} onChange={(e) => setDemoNote(e.target.value)} /> */}
                            <div className="inputfield">
                                Support
                                <Select
                                    options={supportOptions}
                                    value={supportData}
                                    onChange={handleSupportDataChange}
                                    placeholder={"Select Support Options "}
                                    isMulti={true}
                                /></div>

                            <div className="inputfield">
                                Training
                                <Select
                                    options={trainingOptions}
                                    value={trainingData}
                                    placeholder={"Select Training Options "}
                                    onChange={handleTrainingDataChange}
                                    isMulti={true}
                                /></div>
                            <div className="inputfield">
                                Storage
                                &nbsp;
                                <div className="inputOptions2">
                                    <input type="number" placeholder='' value={storage} onChange={(e) => setStorage(e.target.value)} max={1048} />
                                    <Select options={memoryOptions} value={storageChange} onChange={(selectedOptions) => setStorageChange(selectedOptions)} placeholder={"Memory type"} /></div></div>


                            <div className="inputfield">
                                File size limit (if any) &nbsp;
                                <div className="inputOptions2">
                                    <input type="number" placeholder='' value={fileSize} onChange={(e) => setFileSize(e.target.value)} />
                                    <Select options={memoryOptions} value={fileSizeChange} onChange={(selectedOptions) => setFileSizeChange(selectedOptions)} placeholder={"Memory type"} /></div></div>
                        </div>
                        <div className="category">
                            <h1>Post Implementation services</h1>
                            <div className="inputfield">
                                Request for change
                                <div className="inputOptions">
                                    <input type="radio" name="request" id="request" checked={requestForChange === true}
                                        onChange={() => setRequestForChange(true)} /> Free
                                    <input type="radio" name="request" id="request" checked={!requestForChange}
                                        onChange={() => setRequestForChange(false)} />Paid </div> </div>
                            <div className="inputfield">
                                Training
                                <div className="inputOptions">
                                    <input type="radio" name="training_2" id="training_2" checked={postImplementationTraining === true}
                                        onChange={() => setPostImplementationTraining(true)} /> Free
                                    <input type="radio" name="training_2" id="training_2" checked={!postImplementationTraining}
                                        onChange={() => setPostImplementationTraining(false)} />Paid </div></div>
                            <div className="inputfield">
                                Data Migration
                                <div className="inputOptions">
                                    <input type="radio" name="migration" id="migration" checked={dataMigration === true}
                                        onChange={() => setDataMigration(true)} /> Free
                                    <input type="radio" name="migration" id="migration" checked={!dataMigration}
                                        onChange={() => setDataMigration(false)} />Paid</div></div>
                            <div>
                            </div>

                            <h1>User Testimonial  </h1>
                            <div className="inputfield">
                                Name &nbsp;
                                <input type="text" placeholder='Enter Name' value={capitalizeFirstLetter(userTestimonialName1)} onChange={(e) => setUserTestimonialName1(e.target.value)} /></div>
                            {userTestimonialName1 && <div> <div className="inputfield">  Designation &nbsp;
                                <input type="text" placeholder='Enter Designation' value={capitalizeFirstLetter(userTestimonialDesignation1)} onChange={(e) => setUserTestimonialDesignation1(e.target.value)} /></div>
                                <div className="inputfield">
                                    Company/Organization &nbsp;
                                    <input type="text" placeholder='Enter Company' value={capitalizeFirstLetter(userTestimonialCompany1)} onChange={(e) => setUserTestimonialCompany1(e.target.value)} /></div>
                                <div className="inputfield">
                                    Comment &nbsp;
                                    <input type="text" placeholder='Enter Comment' value={capitalizeFirstLetter(userTestimonialComment1)} onChange={(e) => setUserTestimonialComment1(e.target.value)} /></div> </div>}

                            <div>

                                Click To Add Another Testimonial <button
                                    value={isSecondTestimonial} onClick={handleSecondTestimonial}>Click Here</button> </div>
                            {isSecondTestimonial && userTestimonialName1 && userTestimonialDesignation1 && userTestimonialCompany1 && userTestimonialComment1 && <div>
                                <h1>User Testimonial </h1>
                                <div className="inputfield">
                                    Name
                                    <input type="text" placeholder='Enter Name' value={capitalizeFirstLetter(userTestimonialName2)} onChange={(e) => setUserTestimonialName2(e.target.value)

                                    } /></div></div>}

                            {isSecondTestimonial && userTestimonialName1 && userTestimonialDesignation1 && userTestimonialCompany1 && userTestimonialComment1 && userTestimonialName2 && <div>
                                <div className="inputfield">
                                    Designation &nbsp;
                                    <input type="text" placeholder='Enter Designation' value={capitalizeFirstLetter(userTestimonialDesignation2)} onChange={(e) => setUserTestimonialDesignation2(e.target.value)} /></div>
                                <div className="inputfield">
                                    Company/Organization &nbsp;
                                    <input type="text" placeholder='Enter Company' value={capitalizeFirstLetter(userTestimonialCompany2)} onChange={(e) => setUserTestimonialCompany2(e.target.value)} /> </div>
                                <div className="inputfield">
                                    Comment &nbsp;
                                    <input type="text" placeholder='Enter Comment' value={capitalizeFirstLetter(userTestimonialComment2)} onChange={(e) => setUserTestimonialComment2(e.target.value)} /></div> </div>}

                        </div>

                        <input type="submit" value="Submit" />
                </form >
            </div >
        </>
    )
}

export default Products