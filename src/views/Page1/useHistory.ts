import { useState } from "react";
import moment from "moment";

interface IHistory {
  createdAt: string;
  message: string;
}

interface UseHistoryOutput {
  histories: IHistory[];
  appendHistory: (msg: string) => void;
}

export const useHistory = (): UseHistoryOutput => {
  const [histories, setHistories] = useState<IHistory[]>([]);

  const appendHistory = (msg: string) => {
    setHistories(histories.concat({
      createdAt: moment().format("MM/DD/YYYY HH:mm:ss"),
      message: msg
    }));
  }

  return { histories, appendHistory }
}