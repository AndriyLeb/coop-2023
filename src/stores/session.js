import { reactive, ref } from "vue";
import { defineStore, getActivePinia } from "pinia";

export const useSessionStore = defineStore(
  "session",
  () => {
    const data = reactive({
      member: {},
      token: "",
    });

    function setSession(member, token) {
      (data.member = member), (data.token = token);
    }
    function resetSession() {
      (data.member = {}), (data.token = "");
    }

    async function isValid() {
      if(!data.member.id) return false;

      const mid = data.member.id;

      let response = await api.get(
        `members/${mid}/signedin?token=${data.token}`
      );
      response = await response;

      if (!response.token) {
        return false;
      }

      return true;
    }

    return { data, setSession, resetSession, isValid };
  },
  {
    persist: true,
  }
);
