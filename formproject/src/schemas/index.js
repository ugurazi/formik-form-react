import * as yup from 'yup';
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicschema=yup.object().shape({
    email:yup
        .string()
        .email('Geçerli bir email giriniz')
        .required('Email giriniz'),
    age:yup
        .number()
        .positive('Lütfen geçerli bir yaş giriniz')
        .integer('Lütfen geçerli bir tam sayı giriniz.')
        .required('Yaş giriniz.'),
    password:yup
        .string()
        .min(5,'Lütfen minimum 5 karakter giriniz')
        .matches(passwordRules,{
            message:'Lütfen en az bir büyük harf, bir küçük harf ve bir sayı giriniz'
        })
        .required('Şifre giriniz'),
    confirmPassword:yup
    .string()
    .oneOf([yup.ref('password')],'Şifreler eşleşmiyor')
    .required('Tekrar şifre giriniz.')

});

export const advencedSchema=yup.object().shape({
    username:yup
        .string()
        .min(3,'Kullanıcı ismi minimum 3 karakter uzunluğunda olmalıdır')
        .required('Kullanıcı ismi giriniz'),
    university:yup
        .string()
        .oneOf(['bogazici','gsu','odtu','itu'],'Lütfen üniversitenizi seçiniz')
        .required('Lütfen üniversitenizi seçiniz'),
    isAccepted:yup
        .boolean()
        .oneOf([true],'Kullanım koşullarını kabul ediniz')
})