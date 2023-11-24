import {body} from "express-validator";
export const registerValidation = [
    body("email","Неправильний формат пошти").isEmail(),
    body("password","Неправильний формат паролю").isLength({min:5}),
    body("fullName","Неправильний формат імені").isLength({min:3}),
    body("AvatarUrl","Неправильний формат ссилки").optional().isURL()
]
export const loginValidation = [
    body("email","Неправильний формат пошти").isEmail(),
    body("password","Неправильний формат паролю").isLength({min:5})
]
export const createPostsValidation = [
    body("title","Введено невірний формат даних").isLength({min:3}).isString(),
    body("text1","Введено невірний формат даних").isLength({min:3}).isString(),
    // body("text2","Введено невірний формат даних").isLength({min:3}).isString(),
    body("price","Введено невірний формат даних").isNumeric(),
    body("category","Введено невірний формат даних").isLength({min:3}).isString(),
    body("imgmain","Введено невірний формат даних").isString(),
    body('imagesSlider').isArray().withMessage('Масив фотографій повинен бути масивом').custom((value, { req }) => {
        if (!value.every(item => typeof item === 'string')) {
            throw new Error('Масив фотографій повинен містити тільки стрічки');
        }
        return true;
    }),
];
    // body("imgsecond","Введено невірний формат даних").isString(),
    // body("imgthird","Введено невірний формат даних").isString(),
