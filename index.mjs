import axios from "axios";
export const handler = async (event, context = null) => {
  try {
    const { url } = event;
    delete event.url;
    delete event._edgebrix;
    delete event.webhookData;
    const queryParams = {
      ...event,
    };

    await axios.post(url, queryParams);
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
