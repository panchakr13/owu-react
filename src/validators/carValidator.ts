import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({

            'string.pattern.base':'Your brand value didnt match pattern'

        }),

    year: Joi.number().min(1990).max(2024).messages({

        'number.min': 'year must be > 1990',
        'number.max':'year must be < 2024'

    }),

    price: Joi.number().min(0).max(1000000).messages({

        'number.min': 'price must be >= 0',
        'number.max':'price must be <= 1000000'
    })
})