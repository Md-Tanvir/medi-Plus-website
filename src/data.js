const data = [
  {
    id: 1,
    name: "Mental health care",
    description:
      "Mental health services for adults include public hospitals  providing treatment for voluntary and compulsory patients through acute in-patient wards community-based services and teams -bridging the gap between in-hospital care and living in the community and include the Acute Community Intervention Service (ACIS), community care units (CCUs), Prevention and Recovery Care services (PARCs) and outpatient clinical treatment Mental Health Community Support Services (MHCSS)  these are managed by non-government organisations and provide assistance with daily activities and help people with severe and enduring mental illness to live successfully in the community.",
    img: "https://cdn.americanprogress.org/wp-content/uploads/2010/10/04090000/mentalhealth_onpage.jpg",
  },
  {
    id: 2,
    name: "Dental care",
    description:
      "Permanent teeth can last a lifetime with proper care. The risk of tooth decay, gum disease and tooth loss can be reduced with good oral hygiene, a low-sugar diet, use of a mouthguard when playing sport, and regular visits to the dentist or other oral health professional. It is recommended that everyone, including young children, visit the dentist at least once every six months. Modern techniques mean that dental treatment can be carried out with no, or very little, discomfort.When you go for a dental check-up, your dental professional will start by asking questions about your general health and medications. Many health conditions have an effect on your oral health and vice versa. And some medicines can affect your mouth or need to be taken into consideration before treatment.",
    img: "https://revitalizingsmiles.com/wp-content/uploads/2018/01/Dental-care.jpg",
  },
  {
    id: 3,
    name: "Laboratory and diagnostic care",
    img: "https://lh3.googleusercontent.com/proxy/kiPrFY1l03md7YqjlK94mV0vYjFlnIaqnO_8S8QovIuW0-IuIt_SeOqF_wD2jZqqb4IzT8yTTRohoFucWyyGaz55Rs_0NpZEqI15QQsG7dwhhHvPtCNCYTwjJ3xD32ICyNQ6zR69xbfL0hU",
    description:
      "Lab tests and diagnostic procedures are tests used to check if a person???s health is normal. For example, a lab can test a sample of your blood, urine or body tissue to see if something is wrong. A diagnostic test, like blood pressure testing, can show if you have low or high blood pressure.Laboratory tests check a sample of your blood, urine, or body tissues. A technician or your doctor analyzes the test samples to see if your results fall within the normal range. The tests use a range because what is normal differs from person to person. Many factors affect test results. These includeYour sex age and race What you eat and drink Medicines you take How well you followed pre-test instructions Your doctor may also compare your results to results from previous tests. Laboratory tests are often part of a routine checkup to look for changes in your health. They also help doctors diagnose medical conditions, plan or evaluate treatments, and monitor diseases.",
  },
  {
    id: 4,
    name: "Preventative care",
    img: "https://www.communityreachcenter.org/wp-content/uploads/2016/09/shutterstock_238688119.jpg",
    description:
      "Preventive care (sometimes called ???preventative care???) is routine health care that includes screenings, services and counseling to help prevent illness, disease or other health problems.It???s covered by your plan because it can help you stay healthy and lets you know if you may develop a health problem. These services are not covered as preventive care: Below are examples of common services your doctor may do that are considered diagnostic and not preventive care by the ACA. If your provider files them as preventive they will be denied as not covered; these services should be filed as diagnostic and will pay in accordance with your diagnostic benefit:Urine testsHormone tests (i.e. testosterone) Vitamin B and D testsChest X-raysThyroid tests EKGs (electrocardiograms) Iron level testing",
  },
  {
    id: 5,
    name: "Nutritional support",
    img: "https://pubmiddleware.mims.com/resource/image/14E002C1-C283-4649-AAA1-AA4D00E38665/OriginalThumbnail/THUMBNAIL_RPT1216_course.jpg",
    description:
      "Achieving good nutritional status is an important way to support other healthcare interventions in reducing morbidity and mortality. This can be in the form of nutritional advice, support and supplementation.[1]Oral, enteral or parenteral nutritional support, alone or in combination, should be considered for all people who are either malnourished or at risk of malnutrition. Potential swallowing problems should be taken into account.[2]With increasing emphasis on patient care at home rather than in hospital, many of the issues in the community are the same as within the hospital environment. Both enteral and parenteral nutrition at home place a considerable burden on family or other carers, who therefore require adequate training and ongoing support. The co-ordination of patient care by a multidisciplinary nutritional care team is essential.",
  },
  {
    id: 6,
    name: "Pharmaceutical care",
    img: "https://media.istockphoto.com/photos/doctor-prescribing-medicine-to-a-patient-in-the-office-picture-id1270296459?b=1&k=20&m=1270296459&s=170667a&w=0&h=TsSCgGoLh7q62iRed_pZPJo7kH0uQ_9N2DVnFHtrnCo=",
    description:
      "Pharmaceutical care is the responsible provision of drug therapy for the purpose of achieving definite outcomes that improve a patient???s quality of life??????. 1 Nonetheless, already since 1990 some debate existed about different elements in this definition, and also different understandings on how this definition links in with the professional mission of the pharmacist. In further statements, consensus meetings, or position papers, attempts were made to clarify the controversies around the definition. More than 20 years should be enough to analyse the definition and its different elements in depth, and (why not) even the term. But questions still remain. In this joint editorial, we cannot provide solutions but we can formulate some questions that may help in the clarification process.",
  },
  {
    id: 7,
    name: "Transportation",
    img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/6AF4/production/_119908372_gettyimages-1208428993.jpg",
    description:
      "The purpose of ambulance transportation is to transport injured or sick individuals to and from an emergency room, medical center, or physicians office. Ambulance transportation is classified into two categories: emergency and non-emergency transportation.  Although non-emergency transport can be purchased for any reason, it is most notably used in pre-scheduled transports after a surgery or operation, especially when the patient is in a wheelchair or confined to a bed.   Emergency transportation is typically used in the event of a medical emergency, when the individuals health is in serious danger. Non-emergency ambulance transportation is only covered if you have Medicare Part B.  It will only bring you to the closest appropriate medical facility equipped to provide the care needed.  Medicare will pay to have you transported out of your area if there are no adequate services provided closer to you.  If the ambulance company will not cover the charges, they are required to supply an Advance Beneficiary Notice of Noncoverage.  All ambulance suppliers must accept your Medicare privileges.",
  },
  {
    id: 8,
    name: "Prenatal care",
    img: "https://www.sih.net/-/media/c31a8df6bd8442bdb4aa9e6795b2891b.ashx",
    description:
      "Prenatal care, also known as antenatal care, is a type of preventive healthcare. It is provided in the form of medical checkups, consisting of recommendations on managing a healthy lifestyle and the provision of medical information such as maternal physiological changes in pregnancy, biological changes, and prenatal nutrition including prenatal vitamins, which prevents potential health problems throughout the course of the pregnancy and promotes the mother and childs health alike.[1][2] The availability of routine prenatal care, including prenatal screening and diagnosis, has played a part in reducing the frequency of maternal death, miscarriages, birth defects, low birth weight, neonatal infections and other preventable health problems.",
  },
  {
    id: 9,
    name: "Substance abuse treatment",
    img: "https://www.santecenter.com/wp-content/uploads/2017/07/substance-abuse-treatment.jpg",
    description:
      "An alcohol and drug rehab program provide patients with comprehensive substance abuse treatment, consisting of individualized treatment plans, individual therapy, group counseling, family therapy, support groups, and aftercare planning. These interventions help patients build coping skills, improve communication with family members, practice sober social skills, and avoid triggers. Substance abuse disorders are complicated. No two individuals are exactly the same, so addiction rehabilitation (rehab) programs provide a treatment approach that is comprehensive, individualized, and holistic.",
  },
];
