// Problem: Using fully front-end bound internalization techniques such as i18next is heavy on the workload of developer.

// Problem 2: Using back-end bound internalization techniques such as getting resources from an api call is not as dynamic as expected.

/**
 * Here's a plan: Ditch the library. Write an API to get resources from. Bind that API to an online .xml file that can be updated by anyone who knows how to use excel/sheets. then, on the frontend side, write a custom hook that, whenever language switcher is clicked, sends the api GetResources, gets the data, writes it in resources on global state, then, whenever hook is used with a key, returns the corresponding value from resources with find() method.
 * Downsides: Backend developer have had to run the server to pull data from sheets file. Still it resulted in less effort than intl libraries.
 */

// Code below

import { useAppSelector, useAppDispatch } from "setup/redux/Hooks";
import { setLanguageCode } from "features/commonSlice/commonSlice";
import { GetResources } from "features/commonSlice/commonServices";
import { GetTenantContent } from "features/tenantSlice/tenantServices";
import { useGetHomeValueListQuery } from "services/homeInsurance/homeCoreApi";

const useLanguageHook = () => {
  const appDispatch = useAppDispatch();
  const { id } = useAppSelector(({ tenant }) => tenant);
  const { resources, languageCode } = useAppSelector(({ common }) => common);
  const { refetch } = useGetHomeValueListQuery(undefined, {
    skip: !window.location.pathname.includes("home-insurance"),
  });

  const handleLanguageChange = () => {
    const code = localStorage.getItem("lang_code")
      ? localStorage.getItem("lang_code")
      : languageCode;
    localStorage.setItem("lang_code", code === "en" ? "es" : "en");
    appDispatch(setLanguageCode(code === "en" ? "es" : "en"));
    appDispatch(GetResources(code === "en" ? "es" : "en"));
    appDispatch(
      GetTenantContent({ tenantId: id, lang: code === "en" ? "es" : "en" })
    );
    if (window.location.pathname.includes("home-insurance")) {
      refetch();
    }
  };

  const T = (tag) => {
    return resources?.find((item) => item.key === tag)?.value || tag;
  };

  const swalDuplicateObject = {
    title: `${T("DuplicateKey")}`,
    text: `${T("DuplicateDescKey")}?`,
    icon: "question",
    showCancelButton: true,
    customClass: {
      cancelButton: "duplicate-no me-2",
      confirmButton: "duplicate-yes",
      title: "text-primary",
    },
    confirmButtonText: `${T("YesKey")}`,
    cancelButtonText: `${T("NoKey")}`,
  };

  return { T, handleLanguageChange, swalDuplicateObject };
};

export { useLanguageHook };
