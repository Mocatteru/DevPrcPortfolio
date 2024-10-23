import axios from 'axios';
import { create } from 'zustand';

interface StoreState {
  userID: number;
  userName: string;
  port: string | number;
  updateUserName: (newName: string) => void;
  fetchUserName: () => void;
  updateUserID: (newID: number) => void;
  fetchUserID: () => void;
}

// FIXME: 포트 하드코딩한 부분 수정해야됨. - 이종현
const useUserStore = create<StoreState>(set => ({
  userID: 167,
  userName: '정보없음',
  port: 3000,
  fetchUserName: async () => {
    try {
      const response = await axios.get('http://localhost:3000/user-info');
      set({ userName: response.data.userName });
    } catch (error) {
      console.log(error);
    }
  },
  updateUserName: async (newName: string) => {
    try {
      const response = await axios.post('http://localhost:3000/update-user-name', { newName });
      set({ userName: response.data.userName });
    } catch (error) {
      console.log(error);
    }
  },
  fetchUserID: async () => {
    try {
      const response = await axios.get('http://localhost:3000/user-info');
      set({ userID: response.data.userID });
    } catch (error) {
      console.log(error);
    }
  },
  updateUserID: async (newID: number) => {
    try {
      const res = await axios.post('http://localhost:3000/update-user-id', { newID });
      set({ userID: res.data.userID });
    } catch (error) {
      console.log(error);
    }
  }
}));

export default useUserStore;
