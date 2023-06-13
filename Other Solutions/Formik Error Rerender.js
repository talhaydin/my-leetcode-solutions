/**
 * Issue Faced: In React, I was using a client side package similar to i18n to handle the localization (language) of the app. I was also using Formik to handle forms and Yup for extensive validation of Formik Inputs.
 * In this scenario, whenever there was an error with a spesific field, it would be displayed under the field, where the label would normally sit.
 * However, when I changed the language of the app, every thing on the UI except these errors would display in the language switched to.
 * I figured this was a retention/cache issue with how formik handles field errors.
 * The solution is as follows;
 */

useEffect(() => {
  // touch on every form input that has been touched before on language change so that it causes a re-render on error components, changing their language
  setTimeout(() => {
    Object.keys(formik.touched).forEach((fieldName) => {
      formik.setFieldTouched(fieldName);
    });
  }, 1000);
}, [language]);

/*It is not the best solution performance wise, but it is the best solution for covering most of use cases.*/
