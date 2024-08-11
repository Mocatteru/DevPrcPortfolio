import axios from 'axios';
import { create } from 'zustand';

interface StoreState {
  userID: number;
  userName: string;
  updateUserName: (newName: string) => void;
  port: string | number;
  apiURL: string;
  fetchUserName: () => void;
}

// FIXME: 포트 하드코딩한 부분 수정해야됨. - 이종현
const useUserStore = create<StoreState>(set => ({
  userID: 167,
  userName: '정보없음',
  updateUserName: async (newName: string) => {
    try {
      const response = await axios.post('http://localhost:3000/userinfo', { newName });
      set({ userName: response.data.userName });
    } catch (error) {
      console.log(error);
    }
  },
  port: 3000,
  apiURL: `http://localhost:${3000}/userinfo`,
  fetchUserName: async () => {
    try {
      const response = await axios.get('http://localhost:3000/userinfo');
      set({ userName: response.data.userName });
    } catch (error) {
      console.log(error);
    }
  }
}));

export default useUserStore;
