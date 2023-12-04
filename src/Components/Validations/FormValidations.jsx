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
    password: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
    confirm_password: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
    accepted: Yup
        .boolean()
        .oneOf([true], 'You must agree to the terms and conditions')
        .required('You must agree to the terms and conditions'),
})