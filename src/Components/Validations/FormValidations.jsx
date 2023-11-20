import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    fullName: Yup.string().min(5).max(25)
        .matches(/^[A-Za-z\s]+$/, 'Invalid characters in full name')
        .required("Please enter your full name"),
    mobileNumber: Yup
        .string()
        .matches(/^[0-9]{10}$/, 'Invalid mobile number')
        .required("Please enter your mobile number"),
    emailId: Yup.string().email('invalid email address').min(5).max(25)
        .required("Please enter your email Id"),
    accepted: Yup
        .boolean()
        .oneOf([true], 'You must agree to the terms and conditions')
        .required('You must agree to the terms and conditions'),
})