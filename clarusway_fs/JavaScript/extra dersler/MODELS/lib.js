export const deneme = "bu bir string denemedir..."

export function myFunction() {
    return "bu bir fonksiyon...";
}

export const myArray = [1, 2, 3, 4, 5];

export const nameNumber = 3323

export const metin = "Clarusway is a Virginia-based IT training school specializing in Cloud & DevOps Engineering, Cybersecurity, Data Analytics, Data Science, Machine Learning, Deep Learning, Full Stack Development, Front End Development, Back End Development and Salesforce. We are committed to helping individuals attain practical knowledge through affordable and effective IT training programs. At Clarusway, we deploy innovative approaches — mentorship programs, peer-learning, and project-based group study methods. Our unique methodology enhances the abilities of learners by providing a fast track to become subject matter experts. Students gain the requisite classroom knowledge paired with the necessary hands-on skills demanded by our fast-paced industry."


//! export keyword unu declare yaparken kullanabildiğimiz gibi sonradan da toplu bir şekilde kullanabiliriz...

// const deneme = "bu bir string denemedir..."

// function myFunction() {
//     return "bu bir fonksiyon...";
// }

// const myArray = [1, 2, 3, 4, 5];

// const nameNumber = 3323

// const metin = "Clarusway is a Virginia-based IT training school specializing in Cloud & DevOps Engineering, Cybersecurity, Data Analytics, Data Science, Machine Learning, Deep Learning, Full Stack Development, Front End Development, Back End Development and Salesforce. We are committed to helping individuals attain practical knowledge through affordable and effective IT training programs. At Clarusway, we deploy innovative approaches — mentorship programs, peer-learning, and project-based group study methods. Our unique methodology enhances the abilities of learners by providing a fast track to become subject matter experts. Students gain the requisite classroom knowledge paired with the necessary hands-on skills demanded by our fast-paced industry."

//? export{deneme, myFunction, myArray, nameNumber, metin}



//! takma adla export edebilirmiyiz...

// export {deneme, myFunction, myArray, nameNumber as sayı, metin}

//! default export belirleme.... default keywordunu kullanıyoruz...bir sayfada bir adet default export olabilir...

export default function myFunction1(a,b) {
    return a * b;
}