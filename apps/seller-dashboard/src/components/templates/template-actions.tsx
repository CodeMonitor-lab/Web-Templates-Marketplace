import templateService from "@/services/template.service";
import { toast } from "@/lib/utils/toast";

/*
|--------------------------------------------------------------------------
| GET TEMPLATES
|--------------------------------------------------------------------------
*/
export const getTemplates = async () => {
  try {
    return await templateService.getTemplates();
  } catch (error: any) {
    console.error("Get templates failed:", error);

    toast.error(
      error?.response?.data?.message || "Failed to fetch templates"
    );

    return [];
  }
};

/*
|--------------------------------------------------------------------------
| GET TEMPLATE BY ID
|--------------------------------------------------------------------------
*/
export const getTemplateById = async (id: string) => {
  try {
    return await templateService.getTemplateById(id);
  } catch (error: any) {
    console.error("Get template failed:", error);

    toast.error(
      error?.response?.data?.message || "Failed to fetch template"
    );

    return null;
  }
};

/*
|--------------------------------------------------------------------------
| CREATE TEMPLATE
|--------------------------------------------------------------------------
*/
export const createTemplate = async (data: any) => {
  try {
    const res = await templateService.createTemplate(data);

    toast.success("Template created successfully");

    return res;
  } catch (error: any) {
    console.error("Create template failed:", error);

    toast.error(
      error?.response?.data?.message || "Failed to create template"
    );

    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| UPDATE TEMPLATE
|--------------------------------------------------------------------------
*/
export const updateTemplate = async (id: string, data: any) => {
  try {
    const res = await templateService.updateTemplate(id, data);

    toast.success("Template updated successfully");

    return res;
  } catch (error: any) {
    console.error("Update template failed:", error);

    toast.error(
      error?.response?.data?.message || "Failed to update template"
    );

    throw error;
  }
};

/*
|--------------------------------------------------------------------------
| DELETE TEMPLATE
|--------------------------------------------------------------------------
*/
export const deleteTemplate = async (id: string) => {
  try {
    const res = await templateService.deleteTemplate(id);

    toast.success("Template deleted successfully");

    return res;
  } catch (error: any) {
    console.error("Delete template failed:", error);

    toast.error(
      error?.response?.data?.message || "Failed to delete template"
    );

    throw error;
  }
};