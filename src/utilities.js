import {toast} from 'react-toastify'

const OnSuccess = (message) => {
  toast.success(`✅ Success: ${message}`);
};

const OnError = (message) => {
  toast.error(`❌ Error: ${message}`);
};

export { OnError, OnSuccess };
