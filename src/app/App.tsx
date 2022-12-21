import React, {useEffect, useState} from 'react';
import './App.sass';
import axios, {AxiosResponse} from "axios";
import {Arm, StateMessage} from "../common";
import {Button} from "@mui/material";
import ArmsTable from "../features/ArmsTable";

function App() {
  const [refresh, setRefresh] = useState<boolean>(false)
  const [arms, setArms] = useState<Arm[]>([])

  useEffect(() => {
    let href = ""
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      href = "https://192.168.115.134:4443/user/Admin/manage/stateTest"
    } else {
      href = window.location.href
    }
    axios.post(
        href,
    ).then((response: AxiosResponse<StateMessage>) => {
      console.log(response.data)
      setArms(response.data.arms)
    }).catch((error) => {
      window.alert(error.message)
    })
  }, [refresh])

  return (
    <div className="App">
      <Button variant="outlined" onClick={() => setRefresh(!refresh)} style={{marginTop: ".5%"}}>
        Обновить
      </Button>
      <ArmsTable arms={arms} />
    </div>
  );
}

export default App;
