import Footer from '../layouts/generic/footer';
import Header from '../layouts/generic/header';
import { PolicyHeaderImage } from '../lib/images';
import { ROUTES } from '../lib/route-links';

const PrivacyPolicy = () => {   

    return (
        <div className="w-full justify-start items-center bg-white">
            <main className="w-full block">
               <Header link={ROUTES.SIGNUP} buttonText='Get Started'/>
               <section className='w-full flex min-h-[300px] bg-[#FFFFFF] bg-cover bg-no-repeat bg-[center_center]' style={{ backgroundImage: `url(${PolicyHeaderImage})` }}>
                    <div className='w-full flex items-center px-20 max-sm:px-0 max-sm:justify-center'> 
                      <h1 className='text-[#FFFFFF] font-bold text-left text-[35px] max-sm:text-[30px]'>Privacy Policy</h1>
                    </div>
                </section> 
                <section className='relative min-h-[450px] max-sm:min-h-[650px] bg-[#FFFFFF] py-10 px-20 max-sm:px-10'>
                    <div className='flex space-x-2 justify-center'>
                      <h4 className='text-[35px] font-semibold text-[#2F3934]'>ABOUT APPASTORE AND <span className='text-[#EF7822]'>THIS POLICY</span></h4>
                    </div>
                    <div className='w-full py-10 px-20 max-sm:px-5 text-left'>
                      <p className='text-[#000000] text-[14px] mb-5'>EarlyBird Crystals Technologies, trading as Appastore, is a limited company registered in Nigeria (hereinafter referred to as "Appastore" or "we"). We, EarlyBird Crystals Technologies, act as the data controller for your personal data. While using the Appastore Platform, we may share personal data with Restaurants, Retail outlets and Delivery drivers who act as separate data controllers. If you have any questions or concerns regarding this privacy policy or your personal data, please contact us using the provided contact details in the "Questions and updates" section below.<br /><br />
                      Appastore collects and processes personal data during the installation and use of the Appastore Platform, as well as during the registration, on-boarding, and provision of services directly or through Appastore Partners (local subsidiaries, representatives, affiliates, agents, partners, etc.), in accordance with the relevant terms of use. Please note that the processing of geographical location data is generally necessary for the use of the Appastore Platform.<br /><br />
                      Additionally, Appastore may collect personal data about individuals who interact with us, including through browsing our websites and using our apps. <br /><br />
                      By using our websites, apps, and services, you acknowledge that we process your personal data in accordance with this privacy policy</p>
                        
                        <p className='text-[#000000] text-[16px] font-semibold mt-3'>WHAT  TYPES  OF  USER  PERSONAL  DATA  WE  COLLECT  AND  PROCESS</p>
                        <span className='text-[#000000] text-[14px]'>Personal  data  is  generally  processed  in  order  to  provide  the  service  contracted  with  Appastore Platform.  Appastore,  also  by  means  of  Appastore  Partners,  collects  data  about  users  which may include:</span>
                        <br />
                        <ul className='list-disc px-10 mb-5'>
                            <li><span className='text-[#000000] text-[14px]'>biographical  and contact information including name, telephone number, e-mail  address, as collected during installation of the app;</span></li>
                            <li><span className='text-[#000000] text-[14px]'>information related to Order(s) made via Appastore app and information related to each  order  made  (special  requests  regarding  ordered  food/groceries,  for  example  cooking preferences,  information  about  allergies,  if  the  User  decides  to  provide  such  information etc), food preferences, etc.; </span></li>
                            <li><span className='text-[#000000] text-[14px]'>geographic  location  from  where  you  access  and  use  the app from and to what  location you order the food/convinience/groceries (this is required for the service);</span></li>
                            <li><span className='text-[#000000] text-[14px]'>where  you  register  for  an  account,  your  user  ID  and  password  and  associated  account information such as your preferences and any applicable promo codes;</span></li>
                            <li><span className='text-[#000000] text-[14px]'>where  you  choose  to  connect  to  the  service  from a third party service, such as  Facebook, your information from that service;</span></li>
                            <li><span className='text-[#000000] text-[14px]'>feedback ratings (including information provided to resolve disputes);</span></li>
                            <li><span className='text-[#000000] text-[14px]'>payment information and payment history;</span></li>
                            <li><span className='text-[#000000] text-[14px]'>information  regarding  your  requests  to  order  food/convinience/groceries when  you  are  the  user/  your  acceptance  to  deliver  items  when  you  are  the  delivery driver,  including  geographical  location,  the  time  of  provision  of  service,  details  of  the  route  of  delivering the item and destination; price paid and other order history;</span></li>
                            <li><span className='text-[#000000] text-[14px]'>text, images and other user content you provide;</span></li>
                            <li><span className='text-[#000000] text-[14px]'>if  we  ban  or  suspend  you  from  use  of  the  service,  a  record  of  that  ban  or  suspension;</span></li>
                            <li><span className='text-[#000000] text-[14px]'>identification data of the device on that you have installed;</span></li>
                            <li><span className='text-[#000000] text-[14px]'>website and communication information such as details collected by cookies and  other similar tracking technologies when you use our sites or apps;</span></li>
                            <li><span className='text-[#000000] text-[14px]'>details  of  support  queries  you  make  (e.g.  through  our  apps  or  via  other  communication channels), including record of any reported lost items; and</span></li>
                            <li><span className='text-[#000000] text-[14px]'>where we reasonably suspect fraud, details of offences or alleged offences from  fraud detection and prevention agencies.</span></li>
                          </ul>
                        <p className='text-[#000000] text-[16px] font-semibold mt-3'>USER PERSONAL DATA RETENTION</p>
                        <span className='text-[#000000] text-[14px]'>Your personal data will be retained as long as you maintain an active account. In the event that your account is closed, your personal data will be securely deleted, destroyed, or anonymized (as outlined in this section) from the databases, unless its retention is necessary for legal or regulatory purposes or certain legitimate business purposes such as accounting, dispute resolution, or fraud prevention. The following guidelines apply:</span>
                        <br />
                        <ul className='list-disc px-10 mb-5'>
                            <li><span className='text-[#000000] text-[14px]'>Biographical and contact information, such as name, telephone number, and email address.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Banking or financial information and payment details.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Tax-related information.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Geographical locations when Delivery drivers are logged into the app (required for the service).</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Demographic data.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Account information, including user ID.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Details of performed Orders, journeys, feedback ratings, and duration of journey provision on each day.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Fare estimates, actual fares, and other payment data.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Earnings history and fiscal data.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>User-generated text, images, and other content provided.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Records of any warnings or withdrawal of service rights.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Device identification data where the relevant Appastore app is installed.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Website and communication information, including details collected through cookies and tracking technologies when using our sites or apps. This includes support queries made through our apps or other communication channels.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>User complaints related to deliveries performed by the Delivery driver.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Background check information in compliance with local requirements, which may include medical certificates, topographical test certificates, and language test certificates.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Data regarding criminal convictions and offenses if permitted or necessary under applicable law.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Information obtained from third parties to verify any information provided during Appastore registration.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Records of information requests made by law enforcement, regulatory, governmental, or judicial bodies.</span></li>
                        </ul>
                        <span className='text-[#000000] text-[14px]'>We collect and process personal data of Delivery drivers to ensure regulatory compliance, verify their qualifications for the professional activity of delivering food, and safeguard contractual relations associated with the Appastore app service. This includes resolving any delivery service quality issues and ongoing monitoring of compliance. Appastore, including through Appastore Partners, can access the geographic location of a Delivery driver, dispatch information, and service usage times.</span>
                        <br />
                        <p className='text-[#000000] text-[16px] font-semibold mt-3'>DELIVERY DRIVER PERSONAL DATA RETENTION</p>
                        <span className='text-[#000000] text-[14px]'>You can view your personal data in the Appastore Driver application. Your personal data will be stored as long as you have an active delivery driver account, unless your personal data is required to be retained for certain legal or regulatory purposes, or legitimate business purposes including accounting, dispute resolution or fraud prevention purposes. This follows that:</span>
                        <br />
                        <ul className='list-disc px-10 mb-5'>
                            <li><span className='text-[#000000] text-[14px]'>If your account will be closed the personal data will be stored for an additional 3- year period.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Data necessary for accounting purposes shall be stored for 7 years.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>In  the  event of suspicions of an administrative or criminal offence, fraud or false  information, the data shall be stored for 10 years.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>In  the  event  of  disputes  or  investigations,  the  data  shall  be  retained  until  the  claim or investigation is satisfied/resolved or the expiry date of such claims.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>After  we  no  longer  need  your  personal  data,  it  will  be  deleted, securely destroyed or  anonymized (according to the policies set out in this section) from the databases,  Please note that the uninstallation of the Appastore app from your device does not cause the  automatic deletion, destruction or anonymization of your personal data.</span></li>
                        </ul>
                        <p className='text-[#000000] text-[16px] font-semibold mt-3'>HOW AND WHY WE USE THIS PERSONAL DATA</p>
                        <span className='text-[#000000] text-[14px]'>Appastore collects and utilizes personal data to offer the Appastore apps and for legitimate business purposes. These purposes are outlined below. In compliance with Nigerian data protection laws, Appastore's usage of personal data must be justified by one of several legal bases, which are also specified below:</span>
                        <br />
                        <ul className='list-disc px-10 mb-5'>
                            <li><span className='text-[#000000] text-[14px]'>We employ personal data to provide our Appastore apps, manage your user accounts, and facilitate your feedback. If you are a User, we use personal data to forward your food, convenience, groceries, and parcel order to the relevant restaurant/retail outlets, accept your order request, and enable you to finalize a food/convinience/groceries/parcel preparation contract with the restaurant or finalize an item delivery contract with a retail outlet. These activities serve as the lawful basis for performing and fulfilling our contracts with you, as well as for our legitimate interests in providing our services to you In order to fulfill your delivery request, we search for and assign the appropriate delivery driver. This information, including geographical details, is then shared with the assigned delivery driver.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Once you place a food, convenience, groceries, or parcel order through the Appastore app, additional information is shared with the restaurant/retail outlets and/or the delivery driver to facilitate communication (please refer to the "Disclosure of personal data" section for more details).</span></li>
                            <li><span className='text-[#000000] text-[14px]'>If you are a delivery driver, we utilize your personal data to onboard you as a service provider and enable interactions with Users. This includes helping you decide whether to fulfill a User's requested delivery and, once a delivery is assigned, facilitating communication with the User (please refer to the "Disclosure of personal data" section for more information).</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Personal data may be used to facilitate payments between Users, Restaurants/retail outlets, and delivery drivers. Additionally, through Appastore Partners, we may use personal data to provide support, including resolving service quality issues and responding to queries from Users, Restaurants/retail outlets, and delivery drivers.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Contact details are used to notify you about updates to our websites and the Appastore apps.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>We conduct necessary checks in accordance with applicable laws, including legal obligations, legitimate interests (to comply with legal or regulatory requirements and ensure a safe service), legal claims, and substantial public interest (processing to prevent or detect a crime).</span></li>
                            <li><span className='text-[#000000] text-[14px]'>In our efforts to prevent fraud, including fraudulent payments, we utilize personal data. If false or inaccurate information is provided and fraud is identified or suspected, your personal data may be shared with fraud prevention agencies and may be recorded by us or them.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>In certain jurisdictions, we may share earnings data with tax authorities or other relevant entities.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>For research and development purposes (lawful basis: legitimate interests to improve our services), we may use personal data to enhance our websites and apps, including their security features, by analyzing it to gain better insights into our business and services. For example, we collect data on the routes taken by Appastore.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>To analyze geographic coverage and provide recommendations to delivery drivers or onboard new restaurants/retail outlets, we may analyze the personal data of app users. This analysis involves creating profiles based on your personal data and behavioral information, such as the pages on the website or apps you have interacted with. Additionally, we may utilize data obtained from third parties or publicly available sources. The information gathered through this analysis may be used for advertising, analytics, and support purposes.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Surveys or feedback provided by users may also contribute to these efforts.</span></li>
                        </ul>
                        <span className='text-[#000000] text-[14px]'>In order to keep you informed about news related to our products and services and to analyze your interactions with our communications, we may send you marketing materials. This is done with your consent or based on our legitimate interest, where consent is not required. We ensure compliance with applicable laws while sending promotional messages about the Appastore app and products/services offered by selected business partners. For more details on marketing and managing your preferences, please refer to the "Direct Marketing to Users" section below.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>To understand and analyze your online experiences, as well as identify events, products, and services that may interest you, we employ cookies and other tracking technologies. This analysis involves monitoring your interactions with our websites, apps, or marketing emails and may involve combining personal data, regardless of whether you are logged in or not.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>We also utilize your personal data to fulfill our legal obligations and address legal claims. This includes enforcing our terms and meeting regulatory requirements, which may require the disclosure of personal data to third parties, courts, regulators, governmental agencies, or law enforcement agencies during inquiries, proceedings, or investigations.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>In the event of a business reorganization or change, we may transfer some or all of your personal data to third parties as part of due diligence processes, negotiations for the sale of our business, or reorganization efforts. The reorganized entity or third party may then use your personal data for the same purposes outlined in this policy.</span>
                        <br /><br />
                        <p className='text-[#000000] text-[16px] font-semibold mt-3'>AUTOMATED DECISION MAKING</p>
                        <span className='text-[#000000] text-[14px]'>We may utilize automated analysis of your personal data to make certain decisions without human intervention. These decisions may pertain to the following:</span>
                        <br />
                        <ul className='list-disc px-10 mb-5'>
                            <li><span className='text-[#000000] text-[14px]'>App and Service Access: We may use information from background checks, verification processes, and behavioral analysis to determine whether you can use or continue to use our app and services. Factors considered may include outcomes suggesting money laundering, known fraudulent conduct, inconsistencies with previous submissions, or deliberate attempts to conceal your true identity. This automated decision-making is based on the necessity to establish a contractual agreement with you or is in the substantial public interest of preventing or detecting a crime.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Pricing: To determine pricing, we may utilize information such as your location, timestamps, estimated duration and distance of journey for food/convinience/groceries/parcel deliveries, the number of users and delivery drivers in the vicinity, estimated traffic conditions, and other relevant data. This information helps us calculate the estimated duration of deliveries.</span></li>
                        </ul>
                        <span className='text-[#000000] text-[14px]'>Please note that our automated decision-making processes are designed to enhance the efficiency and accuracy of our services, while also ensuring the safety and security of our platform</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>With regards to each instance of automated decision-making mentioned earlier, you may have the right to request a review of the decision, express your perspective, and contest the outcome of the decision.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>In certain cases permitted by applicable law, we may reject such requests. This includes situations where providing the requested information would result in disclosing a trade secret or would hinder the prevention or detection of fraud or other criminal activities. However, in most cases, our response will be focused on verifying, or requesting an appropriate third party to verify, that the algorithm and source data are functioning as intended, without any errors or biases.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>For more detailed information regarding your rights under applicable data protection laws and instructions on how to exercise these rights, please refer to the section below titled "Your rights in relation to your personal data."</span>
                        <br /><br />
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>DIRECT MARKETING TO USERS </p>
                        <span className='text-[#000000] text-[14px]'>Through our Appastore Partners, we may reach out to you with promotional messages concerning the Appastore app and products/services offered by our selected business partners. These messages may be delivered via email, SMS, phone, social media, and other applicable channels. In compliance with legal requirements, we will seek your consent when collecting your data to conduct any such marketing activities on our website or within the Appastore app.</span>
                        <br />
                        <span className='text-[#000000] text-[14px]'>If you no longer wish to receive direct marketing messages, you can click on the "Unsubscribe from direct marketing messages" link located in the footer of our marketing messages. Alternatively, you can opt-out through the Profile section of the Appastore App or by contacting us using the provided contact details in the "Questions and Updates" section below. We will promptly process your request to discontinue receiving direct marketing messages.</span>
                        <p className='text-[#000000] text-[16px] font-semibold mt-3'>DISCLOSURE OF PERSONAL DATA TO THIRD PARTIES</p>
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>GENERAL DISCLOSURE OF PERSONAL DATA</p>
                        <br />
                        <span className='text-[#000000] text-[14px]'>Appastore may share and disclose your personal data to third parties as described in the section above titled "How and why we use this personal data." These third parties may include Appastore Partners, Restaurants where the User places Food/convinience/groceries/parcel orders, Delivery drivers who deliver Food/convinience/groceries/parcels, other service providers, advisors, and our group companies.</span>
                        <br /><br />
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>DISCLOSURE OF PERSONAL DATA FOR LAW ENFORCEMENT AND CLAIMS </p>
                        <br />
                        <span className='text-[#000000] text-[14px]'>Appastore is deeply committed to ensuring the safety of all users and delivery drivers who utilize our service. We treat all reports of misconduct with utmost seriousness, and we retain the right, at our discretion, to share relevant information with third parties, including interactions between drivers and passengers. This may include sharing information with law enforcement, regulatory bodies, governmental authorities, or judicial bodies when required by applicable laws, regulations, or when we deem it necessary.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>In the event that we are informed by third parties, law enforcement, regulatory bodies, governmental authorities, or judicial bodies about the need for personal data in relation to administrative or criminal investigations or legal claims, we will comply with applicable laws and regulations. We will provide such personal data to the extent required and reasonable based on their request and our ability to supply the information. The personal data that may be provided could include names, dates of birth (if available), contact numbers, home addresses (if available), tax-related information, details about the Orders and food, convenience, groceries and parcel ordered (including food preferences), and details of any complaints filed by the User, delivery drivers, or relevant third party.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>Appastore, at our discretion, may also provide notice, via Appastore Partners, that we have shared such personal data with the aforementioned third parties, law enforcement, regulatory bodies, governmental authorities, or judicial bodies.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>It is important to note that we reserve the right to proactively initiate police reports if we become aware of any actions or behaviors that may pose a threat to safety or raise criminal concerns.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>We are committed to maintaining a safe and secure environment for all users of our service and will take appropriate actions to address any potential risks or misconduct.</span>
                        <br /><br />
                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>DISCLOSURE OF PERSONAL DATA AS BETWEEN USERS AND DELIVERY DRIVERS</p>
                        <br />
                        <span className='text-[#000000] text-[14px]'>Once the Delivery driver accepts the request for delivery service and a contract for delivery service is established between the User and the Delivery driver, the personal data of Delivery drivers is shared with Users. The User will have access to the Delivery driver's name and geographic location.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>Simultaneously, the personal data of Users is disclosed to the Delivery driver with whom the User has entered into a contract for delivery service. Through the Appastore app, the Delivery driver will see the User's first name and the first letter of their last name, the geographic location of the User, information regarding the Order for the Food/convinience/groceries/parcel placed by the User (including the Restaurant where the Food/convinience/groceries/parcel was ordered), and the contact phone number of the User.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>In accordance with the data processing agreement between the Delivery driver and Appastore, the Delivery driver is authorized to retain the User's data related to the performance of the delivery service for a maximum period of fourteen days after providing the delivery service.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>Please be aware that personal data of Users and Delivery drivers may be disclosed to each other in connection with legal claims, as outlined in the section "Disclosure of personal data for law enforcement and claims" above.</span>
                        <br /><br />

                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>DISCLOSURE  OF  PERSONAL  DATA  AS  BETWEEN  USERS  AND  RESTAURANTS/RETAIL OUTLETS</p>
                        <br />
                        <span className='text-[#000000] text-[14px]'>Once the User has placed an Order for food/convinience/groceries, their personal data is shared with the Restaurant/retail outlet. The Restaurant/Retail outlet will have access to the User's first name and the first letter of their last name, contact phone number, details about the Order and the specific food/convinience/groceries ordered, as well as any additional information provided by the User along with the Order. This additional information may include food preferences, cooking/grocery preferences, or any disclosed allergies.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>As part of the data processing agreement between the Restaurant/Retail Outlet and Appastore, the Restaurant/Retail Outlet is permitted to retain the User's data related to the service performance for a maximum period of fourteen days after the delivery service has been provided.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>Please note that the personal data of Users is shared with Restaurants/Retail Outlets solely for the purpose of fulfilling the Order and providing the requested food/convinience/groceries/parcel deliveries.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>It is important to be aware that personal data of Users may be exchanged between Restaurants/Retail Outlets and vice versa in the event of legal claims, as described in the section titled "Disclosure of personal data for law enforcement and claims" above. This disclosure of personal data may occur as necessary in accordance with applicable laws and regulations.</span>
                        <br /><br />

                        <p className='text-[#000000] text-[14px] font-semibold mt-3'>DISCLOSURE OF PERSONAL DATA BETWEEN DELIVERY DRIVERS AND RESTAURANTS/RETAIL OUTLETS</p>
                        <br />
                        <span className='text-[#000000] text-[14px]'>Once the delivery agreement between the User and the Delivery driver is finalized, the personal data of Delivery drivers is shared with the Restaurant/Retail Outlets. The Restaurant/Retail Outlets will have access to the Delivery driver's name, contact phone number, and geographic location.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'> In accordance with the data processing agreement between the Restaurant/Retail Outlets and Appastore, the Restaurant/Retail Outlets is permitted to retain the Delivery driver data related to the performance of the service for a maximum period of 1 month after providing the delivery service.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>Please be aware that the personal data of Delivery drivers and Restaurant/Retail Outlets may be disclosed to each other in connection with legal claims, as outlined in the section "Disclosure of personal data for law enforcement and claims" above.</span>
                        <br /><br />

                        <p className='text-[#000000] text-[16px] font-semibold mt-3'>HOW WE PROTECT YOUR PERSONAL DATA</p>
                        <br />
                        <span className='text-[#000000] text-[14px]'>We take the protection of your personal data seriously. While no data transmission over the Internet or websites can be guaranteed to be completely secure, we have implemented commercially reasonable physical, electronic, and procedural safeguards to protect your personal data in accordance with applicable data protection laws. </span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>All personal data you provide to us is stored on our secure servers or those of our subcontractors. Access to and use of this data are subject to our security policies and standards.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>If we have provided you with a password to access certain parts of our website or mobile apps, it is your responsibility to keep this password confidential and comply with any other security procedures we may notify you of. We kindly request that you do not share your password with anyone.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>Rest assured that we continuously evaluate and update our security measures to maintain the confidentiality, integrity, and availability of your personal data.</span>
                        <br /><br />

                        <p className='text-[#000000] text-[16px] font-semibold mt-3'>INTERNATIONAL TRANSFERS OF PERSONAL DATA </p>
                        <br />
                        <span className='text-[#000000] text-[14px]'>Appastore  may  disclose  personal  data  to  our  third  party  service  providers,  who  may  be  located  in  countries  outside  Nigeria,  subject  to  contracts with those third parties.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>These may include: </span>
                        <br />
                        <ul className='list-disc px-10 mb-5'>
                            <li><span className='text-[#000000] text-[14px]'>Our group companies;</span></li>
                            <li><span className='text-[#000000] text-[14px]'>IT  or  payment  services  providers  or  driver verification checks providers. Please  note that our payment provider, paystack, is fully PCI DSS 3.2 compliant as a Level  1 Service Provider; and </span></li>
                            <li><span className='text-[#000000] text-[14px]'>Where  we  transfer  personal  data  from inside Nigeria to outside Nigeria,  we  will  transfer  your  personal  data  subject  to  approved  safeguards  unless  we  are  permitted  under  the Nigerian  data  protection  law  to  make  such  transfers  without  such  formalities.</span></li>
                        </ul>
                        <span className='text-[#000000] text-[14px]'>For further information about the safeguards employed, please contact us at  contact details specified below in section “Questions and updates”.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>Only  authorised employees of Earlybird Crystals Technologies Limited  and Appastore Partners have access to  the personal data and they may access the data only for the purpose of resolving issues  associated  with  the  use  of  the  services  (including  disputes  regarding  logistics  services). </span>
                        <br /><br />

                        <p className='text-[#000000] text-[16px] font-semibold mt-3'>YOU HAVE THE FOLLOWING RIGHTS IN RELATION TO YOUR PERSONAL DATA:</p>
                        <br />
                        <span className='text-[#000000] text-[14px]'>Right to information and access: You have the right to be provided with details about the personal data we hold about you and to receive a copy of your personal data.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>Right to rectification: You can require us to update any inaccuracies in the personal data we hold. To help us with this, please ensure that your user account/app Profile information in the Appastore App is kept up to date. Alternatively, you can contact us using the contact details provided in the "Questions and Updates" section below to inform us of any updates that should be made to your personal data.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'> Right to withdraw consent: If our processing activity is based on your consent, you have the right to withdraw your consent at any time.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>You have the right to:</span>
                        <br />
                        <ul className='list-disc px-10 mb-5'>
                            <li><span className='text-[#000000] text-[14px]'>Obtain a machine-readable copy of the personal data you have provided to us, allowing you to transfer it to another provider or request us to transfer it to another data controller, provided that our processing activity is based on contract performance or consent.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Request the deletion of your personal data, including cases where our processing activity is based on your consent or our legitimate interests. Please note that uninstalling the Appastore app from your device does not automatically result in the deletion of your personal data.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Restrict the use of your personal data while a complaint is being investigated.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Object to our processing of your personal data when our processing is based on our legitimate interests.</span></li>
                            <li><span className='text-[#000000] text-[14px]'>Request that we do not make decisions affecting you solely through automated decision making or profiling. Please refer to the "Automated Decision Making" section above for more information.</span></li>
                        </ul>
                        <span className='text-[#000000] text-[14px]'>Please be aware that exercising these rights is subject to certain exemptions designed to safeguard the public interest (e.g., crime prevention or detection) and our interests (e.g., maintaining legal privilege).</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>If you wish to exercise any of these rights, we encourage you to contact our customer support using the provided contact details in the "Questions and Updates" section below.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>Upon receiving your request, we will verify your entitlement and respond within one month in most cases.</span>
                        <br /><br />
                        <p className='text-[#000000] text-[16px] font-semibold mt-3'>THIRD PARTY LINKS</p>
                        <br />
                        <span className='text-[#000000] text-[14px]'>Our websites and apps may contain links to other third party websites. If you follow a  link to any of those third party websites, please note that they have their own privacy  policies and that we do not accept any responsibility or liability for their policies or their  processing of your personal data. Please check these policies before you submit any  personal data to such third party websites</span>
                        <br /><br />
                        <p className='text-[#000000] text-[16px] font-semibold mt-3'>QUESTIONS AND UPDATES</p>
                        <br />
                        <span className='text-[#000000] text-[14px]'>Certain personal data can be viewed and corrected in the Appastore App. If you have any disputes, questions or concerns about this privacy policy or your personal data, we encourage you to first contact us at:</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>e-mail: support@appastore.co</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>You have the right to make a complaint at any time to the supervisory of your jurisdiction. If you are a resident of Nigeria, you can find the details of the data protection authority from here <a href="https://ndpb.gov.ng/Home/Contact">https://ndpb.gov.ng/Home/Contact</a></span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>The whole text of the present Appastore Privacy Policy, has been written in English, and its deemed authentic.</span>
                        <br /><br />
                        <span className='text-[#000000] text-[14px]'>This privacy policy was last updated on 09.07.2023. Any changes we may make to this privacy policy in the future will be posted on this page and, where appropriate, notified by email. Please check back regularly to keep informed of updates or changes to this privacy policy.</span>
                    </div>
                </section>
            </main>
            <Footer type={1} />
        </div>
    );
};

export default PrivacyPolicy;