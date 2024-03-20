import React, { useEffect, useState } from 'react'
// import { server } from '..'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Select from 'react-select';
import { categoryOptions } from '../Assets/JSON/Category';
import { deploymentOptions } from '../Assets/JSON/Deployment';
import { countryOptions } from '../Assets/JSON/Country';
import { commonToAll, clientManagementSoftwareOptions, complianceAndRiskManagementOptions, contractManagementSoftwareOptions, digitalSignatureOptions, documentManagementAndAutomationOptions, EBillingAndInvoicingOptions, EDiscoveryOptions, intellectualPropertyManagementOptions, litigationManagementAndAnalyticsOptions, legalWorkflowAutomationOptions } from '../Assets/JSON/Features'

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
    const [customerSegmentPercentage, setCustomerSegmentPercentage] = useState(0)
    const [industries, setIndustries] = useState([])
    const [practiceAreas, setPracticeAreas] = useState("")
    const [clientTeamSize, setClientTeamSize] = useState([])
    const [minimumContractPeriod, setMinimumContractPeriod] = useState(Number)
    const [minimumContractPeriodSelected, setMinimumContractPeriodSelected] = useState(Number)

    const [videoLink, setVideoLink] = useState("")
    const [images, setImages] = useState("")

    const [knowHowDocument, setKnowHowDocument] = useState("")
    const [linkedIn, setLinkedIn] = useState("")
    const [instagram, setInstagram] = useState("")
    const [twitter, setTwitter] = useState("")
    const [youtube, setYoutube] = useState("")
    const [otherLink, setOtherLink] = useState("")
    const [demo, setDemo] = useState(Boolean)
    const [demoData, setDemoData] = useState([])
    const [demoLink, setDemoLink] = useState("")

    const [support, setSupport] = useState(Boolean)
    const [supportData, setSupportData] = useState([])
    const [training, setTraining] = useState(Boolean)
    const [trainingData, setTrainingData] = useState([])
    const [storage, setStorage] = useState("")
    const [memoryChange, setMemoryChange] = useState("")

    const [fileSize, setFileSize] = useState("")


    const [freeTrial, setFreeTrial] = useState(false)
    const [freePlan, setFreePlan] = useState(false)
    const [plan1Feature1, setPlan1Feature1] = useState('')
    const [plan1Feature2, setPlan1Feature2] = useState('')
    const [plan1Feature3, setPlan1Feature3] = useState('')
    const [plan2Feature1, setPlan2Feature1] = useState('')
    const [plan2Feature2, setPlan2Feature2] = useState('')
    const [plan2Feature3, setPlan2Feature3] = useState('')
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
    //    await axios.get(`${server}/api/all`, {
    //       withCredentials: true,
    //     }).then((res) => setDataItem(res.data))

    //   }, [])

    const submitHandler = async (e) => {
        e.preventDefault();

        const { data } = await axios.post("https://dreamlegalproductbackend.onrender.com/api/products/new", {
            name, overview, uniqueSellingProposition, category, deployment, accessibility, adoptionTime, country,  language, customerSegment, customerSegmentPercentage, industries, practiceAreas, clientTeamSize, internalCollaboration, externalCollaboration, analyticsAndReporting, toolAdministrationAndControlChange,  intakeAndLeadManagement,clientPortal, documentManagement, caseAlerts, budgetExpenseAndTimeTracking, clientBillingAndInvoicing, policyManagement, issueManagement, lawsComplianceAndRegulatoryTracking, contractCreationAndAuthoring, contractRepository,contractNegotiation,  lifecycleManagement, clauseLibrary, fieldsCreation, trackingAndValidity, documentManagementAndTemplates, documentCapturing, documentCreationAndTemplates, documentCapturing2,documentSearchAndNavigation,authentication, taskAllotment, budgetingExpenseAndTimeTracking, clientManagement,invoiceGenerationAndReview, dataIdentificationAndCollection, searchProcessingAndAnalysis, reviewAndProduction,legalHoldManagement,  ideationAndCreation,lifecycleManagement2, searchAndDiscovery, storageAndRepository, matterLifecycleTracking, courtAndCaseSearch,budgetExpenseAndTimeTracking2,litigationDocketingFeatures, workflowDesignAndConfiguration, assignmentAllotmentAndTracking, documentCreationAndManagement, lawsComplianceAndRegulatoryTracking2,minimumContractPeriod, freeTrial, freePlan, plan1Feature1,plan1Feature2, plan1Feature3, plan2Feature1, plan2Feature2,plan2Feature3, videoLink, knowHowDocument, linkedIn, instagram, twitter, youtube, otherLink, demo,demoData, demoLink, support, supportData, training, trainingData, storage,memoryChange, fileSize, requestForChange, postImplementationTraining, dataMigration, userTestimonialName1, userTestimonialDesignation1, userTestimonialCompany1, userTestimonialComment1, userTestimonialName2, userTestimonialDesignation2, userTestimonialCompany2, userTestimonialComment2
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
    const handleCustomerSegmentChange =
        (selectedOptions) => {
            setCustomerSegment(selectedOptions)
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
                    Name Of Company : { item.name} <br />
                    Category : { item.category}<br /> 
                    Deployment :  { item.deployment} 
                    <br />
                    Mobile Accessibility : {item.accessibility}
                    <br />
                    Focus Countries : {item.country}
                    <br />
                    Average Adoption Time : {item.adoptionTime}
                </div>
            ))
        } */}
            </div>
            <div className="addProducts">
                <form action="" method='post' onSubmit={submitHandler}>
                    <div className="category">

                        <h1>Product Information</h1>
                        Name of the Product &nbsp;
                        <input type="text" placeholder='Enter product name' value={capitalizeFullName(name)} onChange={(e) => setName(e.target.value)}  autoCapitalize='' /><br /><br />
                        Overview ( Up to 150 words ) <br />
                        <textarea type="text" placeholder='Enter Overview' maxLength={1000} value={capitalizeFirstLetter(overview)} onChange={(e) => setOverview(e.target.value)}  rows={9} cols={50} /><br /><br />

                        What is your unique selling proposition? ( Up to 200 words ) <br />
                        <textarea type="text" placeholder='Enter unique selling proposition' value={capitalizeFirstLetter(uniqueSellingProposition)} onChange={(e) => setUniqueSellingProposition(e.target.value)}  maxLength={1500} rows={9} cols={50} /><br /><br />
                        Category <br />

                        <Select options={categoryOptions} value={category} onChange={handleCategoryChange}
                            isMulti={true} 
                        /> <br />
                        Deploymenty <br />
                        <Select options={deploymentOptions} value={deployment} onChange={handleDeploymentChange}
                            isMulti={true} 
                        />

                        <br />
                        Mobile Accessibility
                        <input type="radio" name="Accessibility" id="accessibility" checked={accessibility === true}
                            onChange={() => setAccessibility(true)}  /> True
                        <input type="radio" name="Accessibility" id="accessibility" checked={!accessibility}
                            onChange={() => setAccessibility(false)} />False <br /><br />
                        Average adoption time &nbsp;
                        <input type="number" value={adoptionTime} onChange={(e) => setAdoptionTime(e.target.value)}  />  
                        <Select options={timeSelectionOptions} value={adoptionTimeSelected} onChange={(selectedOptions)=>setAdoptionTimeSelected(selectedOptions)}
                       
                          />  <br /><br />
                        Focus Countries <br />
                        <Select options={countryOptions} value={country} onChange={handleCountryChange}
                            isMulti={true} 
                        />
                        <br />
                        Languages
                        <Select options={languageOptions} value={language} onChange={handleLanguageChange}
                            isMulti={true} 
                        />
                    </div>



                    <div className="category">
                        <h1>Target customers</h1>
                        Customer segment
                        <Select options={customerSegmentOptions} value={customerSegment} onChange={handleCustomerSegmentChange}
                            isMulti={true}
                        /><br />
                        Write the percentage for each of the customer segments selected to show the distribution of customer segments &nbsp;
                        <input type="number" placeholder='Enter Percentage less than or equal to 100' value={customerSegmentPercentage} onChange={(e) => setCustomerSegmentPercentage(e.target.value)}  max={100} />
                        <br /><br />
                        Industries
                        <Select options={industryOptions} value={industries} onChange={handleIndustriesChange}
                            isMulti={true}
                        /><br />
                        What are the practice areas your product can work into?
                        *<br />
                        <Select options={practiceAreaOptions} value={practiceAreas} onChange={handlePracticeAreasChange} isMulti={true} /><br />
                        Client's team size
                        <Select options={clientTeamSizeOptions} value={clientTeamSize} onChange={handleClientTeamSizeChange}
                            isMulti={true}
                        />
                    </div>

                    <div className="category">
                        <h1>Features</h1>
                        <h3>Common to all</h3>
                        Internal Collaboration <Select
                            options={commonToAll.internalCollaboration}
                            value={internalCollaboration}
                            onChange={handleInternalCollaborationChange}
                            isMulti={true}
                        />
                        External Collaboration <Select
                            options={commonToAll.externalCollaboration}
                            value={externalCollaboration}
                            onChange={handleExternalCollaborationChange}
                            isMulti={true}
                        />
                        Analytics and Reporting
                        <Select
                            options={commonToAll.analyticsAndReporting}
                            value={analyticsAndReporting}
                            onChange={handleAnalyticsAndReportingChange}
                            isMulti={true}
                        />
                        Tool Administration and Control
                        <Select
                            options={commonToAll.toolAdministrationAndControl}
                            value={toolAdministrationAndControlChange}
                            onChange={handleToolAdministrationAndControlChange}
                            isMulti={true}
                        />


                        {clientManagementSoftware && (<div> <h3>Client Management Software</h3>
                            Intake and Lead Management
                            <Select
                                options={clientManagementSoftwareOptions.intakeAndLeadManagement}
                                value={intakeAndLeadManagement}
                                onChange={handleIntakeAndLeadManagementChange}
                                isMulti={true}
                            />
                            Client portal
                            <Select
                                options={clientManagementSoftwareOptions.clientPortal}
                                value={clientPortal}
                                onChange={handleClientPortalChange}
                                isMulti={true}
                            />
                            Document management
                            <Select
                                options={clientManagementSoftwareOptions.documentManagement}
                                value={documentManagement}
                                onChange={handleDocumentManagementChange}
                                isMulti={true}
                            />
                            Case Alerts
                            <Select
                                options={clientManagementSoftwareOptions.caseAlerts}
                                value={caseAlerts}
                                onChange={handleCaseAlertsChange}
                                isMulti={true}
                            />
                            Budget, Expense and time tracking
                            <Select
                                options={clientManagementSoftwareOptions.budgetExpenseAndTimeTracking}
                                value={budgetExpenseAndTimeTracking}
                                onChange={handleBudgetExpenseAndTimeTrackingChange}
                                isMulti={true}
                            />
                            Client billing and invoicing
                            <Select
                                options={clientManagementSoftwareOptions.clientBillingAndInvoicing}
                                value={clientBillingAndInvoicing}
                                onChange={handleClientBillingAndInvoicingChange}
                                isMulti={true}
                            />
                        </div>)}


                        {complianceAndRiskManagement && (<div> <h3>Compliance and Risk Management</h3>
                            Policy Management
                            <Select
                                options={complianceAndRiskManagementOptions.policyManagement}
                                value={policyManagement}
                                onChange={handlePolicyManagementChange}
                                isMulti={true}
                            />
                            Issue Management
                            <Select
                                options={complianceAndRiskManagementOptions.issueManagement}
                                value={issueManagement}
                                onChange={handleIssueManagementChange}
                                isMulti={true}
                            />
                            Laws, Compliance and Regulatory tracking
                            <Select
                                options={complianceAndRiskManagementOptions.lawsComplianceAndRegulatoryTracking}
                                value={lawsComplianceAndRegulatoryTracking}
                                onChange={handleLawsComplianceAndRegulatoryTrackingChange}
                                isMulti={true}
                            />

                        </div>)}
                        {contractManagementSoftware && (<div> <h3>Contract Management Software</h3>
                            Contract creation and Authoring
                            <Select
                                options={contractManagementSoftwareOptions.contractCreationAndAuthoring}
                                value={contractCreationAndAuthoring}
                                onChange={handleContractCreationAndAuthoringChange}
                                isMulti={true}
                            />
                            Contract Repository
                            <Select
                                options={contractManagementSoftwareOptions.contractRepository}
                                value={contractRepository}
                                onChange={handleContractRepositoryChange}
                                isMulti={true}
                            />
                            Contract Negotiation
                            <Select
                                options={contractManagementSoftwareOptions.contractNegotiation}
                                value={contractNegotiation}
                                onChange={handleContractNegotiationChange}
                                isMulti={true}
                            />
                            Lifecycle Management
                            <Select
                                options={contractManagementSoftwareOptions.lifecycleManagement}
                                value={lifecycleManagement}
                                onChange={handleLifecycleManagementChange}
                                isMulti={true}
                            />
                            Clause library
                            <Select
                                options={contractManagementSoftwareOptions.clauseLibrary}
                                value={clauseLibrary}
                                onChange={handleClauseLibraryChange}
                                isMulti={true}
                            />

                        </div>)}



                        {digitalSignature && (<div> <h3>Digital Signature</h3>
                            Fields creation
                            <Select
                                options={digitalSignatureOptions.fieldsCreation}
                                value={fieldsCreation}
                                onChange={handleFieldsCreationChange}
                                isMulti={true}
                            />
                            Tracking and validity
                            <Select
                                options={digitalSignatureOptions.trackingAndValidity}
                                value={trackingAndValidity}
                                onChange={handleTrackingAndValidityChange}
                                isMulti={true}
                            />
                            Document management and Templates
                            <Select
                                options={digitalSignatureOptions.documentManagementAndTemplates}
                                value={documentManagementAndTemplates}
                                onChange={handleDocumentManagementAndTemplatesChange}
                                isMulti={true}
                            />
                            Document capturing
                            <Select
                                options={digitalSignatureOptions.documentCapturing}
                                value={documentCapturing}
                                onChange={handleDocumentCapturingChange}
                                isMulti={true}
                            />


                        </div>)}
                        {documentManagementAndAutomation && (<div> <h3>Document Management and Automation</h3>
                            Document Creation and templates
                            <Select
                                options={documentManagementAndAutomationOptions.documentCreationAndTemplates}
                                value={documentCreationAndTemplates}
                                onChange={handleDocumentCreationAndTemplatesChange}
                                isMulti={true}
                            />
                            Document capturing
                            <Select
                                options={documentManagementAndAutomationOptions.documentCapturing}
                                value={documentCapturing2}
                                onChange={handledDocumentCapturingChange2}
                                isMulti={true}
                            />
                            Document search and navigation
                            <Select
                                options={documentManagementAndAutomationOptions.documentSearchAndNavigation}
                                value={documentSearchAndNavigation}
                                onChange={handleDocumentSearchAndNavigationChange}
                                isMulti={true}
                            />
                            Authentication
                            <Select
                                options={documentManagementAndAutomationOptions.authentication}
                                value={authentication}
                                onChange={handleAuthenticationChange}
                                isMulti={true}
                            />
                            Task allotment
                            <Select
                                options={documentManagementAndAutomationOptions.taskAllotment}
                                value={taskAllotment}
                                onChange={handleTaskAllotmentChange}
                                isMulti={true}
                            />


                        </div>)}
                        {EBillingAndInvoicing && (<div> <h3>E-billing and Invoicing</h3>
                            Budgeting, Expense and time tracking
                            <Select
                                options={EBillingAndInvoicingOptions.budgetingExpenseAndTimeTracking}
                                value={budgetingExpenseAndTimeTracking}
                                onChange={handleBudgetingExpenseAndTimeTrackingChange}
                                isMulti={true}
                            />
                            Client management
                            <Select
                                options={EBillingAndInvoicingOptions.clientManagement}
                                value={clientManagement}
                                onChange={handleClientManagementChange}
                                isMulti={true}
                            />
                            Invoice generation and review
                            <Select
                                options={EBillingAndInvoicingOptions.invoiceGenerationAndReview}
                                value={invoiceGenerationAndReview}
                                onChange={handleInvoiceGenerationAndReviewChange}
                                isMulti={true}
                            />
                        </div>)}
                        {eDiscovery && (<div> <h3>E-discovery</h3>
                            Data identification and collection
                            <Select
                                options={EDiscoveryOptions.dataIdentificationAndCollection}
                                value={dataIdentificationAndCollection}
                                onChange={handleDataIdentificationAndCollectionChange}
                                isMulti={true}
                            />
                            Search, Processing and Analysis
                            <Select
                                options={EDiscoveryOptions.searchProcessingAndAnalysis}
                                value={searchProcessingAndAnalysis}
                                onChange={handleSearchProcessingAndAnalysisChange}
                                isMulti={true}
                            />
                            Review and Production
                            <Select
                                options={EDiscoveryOptions.reviewAndProduction}
                                value={reviewAndProduction}
                                onChange={handleReviewAndProductionChange}
                                isMulti={true}
                            />
                            Legal Hold management
                            <Select
                                options={EDiscoveryOptions.legalHoldManagement}
                                value={legalHoldManagement}
                                onChange={handleLegalHoldManagementChange}
                                isMulti={true}
                            />
                        </div>)}
                        {intellectualPropertyManagement && (<div> <h3> Intellectual Property Management</h3>
                            Ideation and creation
                            <Select
                                options={intellectualPropertyManagementOptions.ideationAndCreation}
                                value={ideationAndCreation}
                                onChange={handleIdeationAndCreationChange}
                                isMulti={true}
                            />
                            Lifecycle Management
                            <Select
                                options={intellectualPropertyManagementOptions.lifecycleManagement2}
                                value={lifecycleManagement2}
                                onChange={handleLifecycleManagement2Change}
                                isMulti={true}
                            />
                            Search and Discovery
                            <Select
                                options={intellectualPropertyManagementOptions.searchAndDiscovery}
                                value={searchAndDiscovery}
                                onChange={handleSearchAndDiscoveryChange}
                                isMulti={true}
                            />
                            Storage and Repository
                            <Select
                                options={intellectualPropertyManagementOptions.storageAndRepository}
                                value={storageAndRepository}
                                onChange={handleStorageAndRepositoryChange}
                                isMulti={true}
                            />
                        </div>)}
                        {litigationManagementAndAnalytics && (<div> <h3>Litigation Management and Analytics</h3>
                            Matter lifecycle tracking
                            <Select
                                options={litigationManagementAndAnalyticsOptions.matterLifecycleTracking}
                                value={matterLifecycleTracking}
                                onChange={handleMatterLifecycleTrackingChange}
                                isMulti={true}
                            />
                            Court and case search
                            <Select
                                options={litigationManagementAndAnalyticsOptions.courtAndCaseSearch}
                                value={courtAndCaseSearch}
                                onChange={handleCourtAndCaseSearchChange}
                                isMulti={true}
                            />
                            Budget, Expense and time tracking
                            <Select
                                options={litigationManagementAndAnalyticsOptions.budgetExpenseAndTimeTracking2}
                                value={budgetExpenseAndTimeTracking2}
                                onChange={handleBudgetExpenseAndTimeTracking2Change}
                                isMulti={true}
                            />
                            Litigation docketing features
                            <Select
                                options={litigationManagementAndAnalyticsOptions.litigationDocketingFeatures}
                                value={litigationDocketingFeatures}
                                onChange={handleLitigationDocketingFeaturesChange}
                                isMulti={true}
                            />
                        </div>)}
                        {legalWorkflowAutomation && (<div> <h3>Legal Workflow Automation</h3>
                            Workflow design and configuration
                            <Select
                                options={legalWorkflowAutomationOptions.workflowDesignAndConfiguration}
                                value={workflowDesignAndConfiguration}
                                onChange={handleWorkflowDesignAndConfigurationChange}
                                isMulti={true}
                            />
                            Assignment allotment and tracking
                            <Select
                                options={legalWorkflowAutomationOptions.assignmentAllotmentAndTracking}
                                value={assignmentAllotmentAndTracking}
                                onChange={handleAssignmentAllotmentAndTrackingChange}
                                isMulti={true}
                            />
                            Document creation and management
                            <Select
                                options={legalWorkflowAutomationOptions.documentCreationAndManagement}
                                value={documentCreationAndManagement}
                                onChange={handleDocumentCreationAndManagementChange}
                                isMulti={true}
                            />
                            Laws, Compliance and Regulatory tracking
                            <Select
                                options={legalWorkflowAutomationOptions.lawsComplianceAndRegulatoryTracking2}
                                value={lawsComplianceAndRegulatoryTracking2}
                                onChange={handleLawsComplianceAndRegulatoryTracking2Change}
                                isMulti={true}
                            />
                        </div>)}
                    </div>

                    <div className="category">
                        <h1>Pricing Plan</h1>
                        Minimum Contract period &nbsp;
                        <input type="number" placeholder='Enter Pricing Type' value={minimumContractPeriod} onChange={(e) => setMinimumContractPeriod(e.target.value)} /> <Select style={{ display: "inline" }} options={timeSelectionOptions} value={minimumContractPeriodSelected} onChange={(selectedOptions)=>setMinimumContractPeriodSelected(selectedOptions)}
                             /> <br />

                        Free Trial
                        <input type="radio" name="freeTrial" id="freeTrial" checked={freeTrial === true}
                            onChange={() => setFreeTrial(true)} /> Yes
                        <input type="radio" name="freeTrial" id="freeTrial" checked={!freeTrial}
                            onChange={() => setFreeTrial(false)} />No <br /><br />
                        Free Plan
                        <input type="radio" name="freePlan" id="freePlan" checked={freePlan === true}
                            onChange={() => setFreePlan(true)} /> Yes
                        <input type="radio" name="freePlan" id="freePlan" checked={!freePlan}
                            onChange={() => setFreePlan(false)} />No <br /><br />

                        <h3>Plan 1</h3>
                        Feature  1
                        <input type="text" placeholder='Enter Feature 1' value={plan1Feature1} onChange={(e) => setPlan1Feature1(e.target.value)}  /><br />
                        {plan1Feature1 && <div> Feature  2
                            <input type="text" placeholder='Enter Feature 2' value={plan1Feature2} onChange={(e) => setPlan1Feature2(e.target.value)}  /> </div>}
                        {plan1Feature1 && plan1Feature2 && <div> Feature  3
                            <input type="text" placeholder='Enter Feature 3' value={plan1Feature3} onChange={(e) => setPlan1Feature3(e.target.value)}  /> </div>}<br />


                        {plan1Feature1 && plan1Feature2 && plan1Feature3 && <div>
                            <h3>Plan 2</h3>
                            Feature  1
                            <input type="text" placeholder='Enter Feature 1' value={plan2Feature1} onChange={(e) => setPlan2Feature1(e.target.value)}  /><br />
                            {plan2Feature1 && <div> Feature  2
                                <input type="text" placeholder='Enter Feature 2' value={plan2Feature2} onChange={(e) => setPlan2Feature2(e.target.value)}  /> </div>}
                            {plan2Feature1 && plan2Feature2 && <div> Feature  3
                                <input type="text" placeholder='Enter Feature 3' value={plan2Feature3} onChange={(e) => setPlan2Feature3(e.target.value)}  /> </div>}<br />

                        </div>
                        }
                    </div>

                    <div className="category">
                        <h1>References</h1>
                        Video Link &nbsp;
                        <input type="text" placeholder='Enter Youtube Video Link Only one' value={capitalizeFirstLetter(videoLink)} onChange={(e) => setVideoLink(e.target.value)} />
                        {/* Images ( upto 5) */}
                        {/* <input type="text" /> */}<br /><br />
                        Know how
                        documents &nbsp;
                        <input type="text" placeholder='Enter Document Link here' value={knowHowDocument} onChange={(e) => setKnowHowDocument(e.target.value)} /><br /><br />

                        Linkedin &nbsp;
                        <input type="text" placeholder="Linkedin Link here" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} /> <br /><br />
                        Instagram &nbsp;
                        <input type="text" placeholder="Instagram Link here" value={instagram} onChange={(e) => setInstagram(e.target.value)} /> <br /><br />
                        X(Twitter) &nbsp;
                        <input type="text" placeholder="X(Twitter)" value={twitter} onChange={(e) => setTwitter(e.target.value)} /> <br /><br />
                        Youtube &nbsp;
                        <input type="text" placeholder="Youtube" value={youtube} onChange={(e) => setYoutube(e.target.value)} />
                        <br /><br />
                        Any Other Link &nbsp;
                        <input type="text" placeholder="Youtube" value={otherLink} onChange={(e) => setOtherLink(e.target.value)} />
                    </div>

                    <div className="category">
                        <h1>Services and Support</h1>
                        Demo
                        If yes, then choose out of <Select
                            options={demoOptions}
                            value={demoData}
                            onChange={handleDemoDataChange}
                            isMulti={true}
                        /><br />
                        Add demo link (if any) <br /> <input type="text" placeholder='Enter product name' value={demoLink} onChange={(e) => setDemoLink(e.target.value)} /><br /><br />
                        {/* <input type="text" placeholder='Enter Practice Areas' value={demoNote} onChange={(e) => setDemoNote(e.target.value)} /><br /><br /> */}
                        Support
                        If yes, then choose from these:<Select
                            options={supportOptions}
                            value={supportData}
                            onChange={handleSupportDataChange}
                            isMulti={true}
                        />
                        <br />
                        Training
                        If yes, then choose from these:<Select
                            options={trainingOptions}
                            value={trainingData}
                            onChange={handleTrainingDataChange}
                            isMulti={true}
                        />
                        Storage
                        (Enter the storage capacity in GB) &nbsp;
                        <input type="number" placeholder='' value={storage} onChange={(e) => setStorage(e.target.value)} max={1048} />GB
                        <br /><br />
                        File size limit (if any) &nbsp;
                        <input type="number" placeholder='' value={fileSize} onChange={(e) => setFileSize(e.target.value)} />
                        <Select options={memoryOptions} value={memoryChange} onChange={(selectedOptions)=>setMemoryChange(selectedOptions)} />
                    </div>
                    <h1>Post Implementation services</h1>
                    Request for change
                    <input type="radio" name="request" id="request" checked={requestForChange === true}
                        onChange={() => setRequestForChange(true)} /> Free
                    <input type="radio" name="request" id="request" checked={!requestForChange}
                        onChange={() => setRequestForChange(false)} />Paid <br /><br />

                    Training
                    <input type="radio" name="training_2" id="training_2" checked={postImplementationTraining === true}
                        onChange={() => setPostImplementationTraining(true)} /> Free
                    <input type="radio" name="training_2" id="training_2" checked={!postImplementationTraining}
                        onChange={() => setPostImplementationTraining(false)} />Paid  <br /><br />

                    Data Migration
                    <input type="radio" name="migration" id="migration" checked={dataMigration === true}
                        onChange={() => setDataMigration(true)} /> Free
                    <input type="radio" name="migration" id="migration" checked={!dataMigration}
                        onChange={() => setDataMigration(false)} />Paid
                    <div>


                        <h1>User Testimonial 1 </h1>
                        Name &nbsp;
                        <input type="text" placeholder='Enter product name' value={capitalizeFirstLetter(userTestimonialName1)} onChange={(e) => setUserTestimonialName1(e.target.value)} /><br /><br />
                        {userTestimonialName1 && <div>Designation &nbsp;
                            <input type="text" placeholder='Enter product name' value={capitalizeFirstLetter(userTestimonialDesignation1)} onChange={(e) => setUserTestimonialDesignation1(e.target.value)} /><br /><br />
                            Company/Organization &nbsp;
                            <input type="text" placeholder='Enter product name' value={capitalizeFirstLetter(userTestimonialCompany1)} onChange={(e) => setUserTestimonialCompany1(e.target.value)} /><br /><br />
                            Comment &nbsp;
                            <input type="text" placeholder='Enter product name' value={capitalizeFirstLetter(userTestimonialComment1)} onChange={(e) => setUserTestimonialComment1(e.target.value)} /> </div>}

                        <div> <br />
                            Click To Add Another Testimonial <button
                                value={isSecondTestimonial} onClick={handleSecondTestimonial}>Click Here</button> </div>
                        {isSecondTestimonial && userTestimonialName1 && userTestimonialDesignation1 && userTestimonialCompany1 && userTestimonialComment1 && <div>
                            <h1>User Testimonial 2</h1>
                            Name
                            <input type="text" placeholder='Enter product name' value={capitalizeFirstLetter(userTestimonialName2)} onChange={(e) => setUserTestimonialName2(e.target.value)

                            } /></div>}<br />

                        {isSecondTestimonial && userTestimonialName1 && userTestimonialDesignation1 && userTestimonialCompany1 && userTestimonialComment1 && userTestimonialName2 && <div>
                            Designation &nbsp;
                            <input type="text" placeholder='Enter product name' value={capitalizeFirstLetter(userTestimonialDesignation2)} onChange={(e) => setUserTestimonialDesignation2(e.target.value)} /><br /><br />
                            Company/Organization &nbsp;
                            <input type="text" placeholder='Enter product name' value={capitalizeFirstLetter(userTestimonialCompany2)} onChange={(e) => setUserTestimonialCompany2(e.target.value)} /> <br /><br />
                            Comment &nbsp;
                            <input type="text" placeholder='Enter product name' value={capitalizeFirstLetter(userTestimonialComment2)} onChange={(e) => setUserTestimonialComment2(e.target.value)} /> </div>}

                    </div>

                    <input type="submit" value="Submit" />
                </form >
            </div >
        </>
    )
}

export default Products