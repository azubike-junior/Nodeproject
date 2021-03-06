import Joi from "joi";

export const articleSchema = Joi.object().keys({
  title: Joi.string()
    .min(10)
    .trim()
    .required()
    .label("Title"),
  description: Joi.string()
    .min(20)
    .required()
    .label("Description"),
  content: Joi.string()
    .min(200)
    .required()
    .label("Content"),
  categoryId: Joi.string()
    .required()
    .label("Category")
    .error(() => {
      const message = "Please select a category";
      return message;
    })
});
