import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { GiConsoleController } from "react-icons/gi";
import api from "../../services/api";
import { ButtonMolecule } from "../moleculas/ButtonMolecule";

export function FormOrganism() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  async function handleSubmit() {
    // e.preventDefault();

    const body = {
      form,
    };

    await api
      .post("/pages/edit", body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + JSON.stringify(err.response));
      });

    console.log(body);
  }

  return (
    <div className="w-[771px] h-[707px] flex flex-col justify-center items-center rounded-lg shadow-lg mb-[222px] mt-[122px] ">
      <div className="mb-4">
        <TextField
          className="w-[572px] h-[60px]"
          id="outlined-basic"
          label="Seu nome*"
          variant="outlined"
          // value={name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />
      </div>
      <div className="mb-4">
        <TextField
          className="w-[572px] h-[60px] "
          id="outlined-basic"
          label="Seu e-mail*"
          variant="outlined"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />
      </div>

      <div className="mb-4">
        <TextField
          className="w-[572px] h-[60px] "
          id="outlined-basic"
          label="Telefone*"
          variant="outlined"
          value={form.telefone}
          onChange={(e) =>
            setForm({
              ...form,
              telefone: e.target.value,
            })
          }
        />
      </div>

      <div className="mb-4">
        <TextField
          className="w-[572px] mb-4"
          id="outlined-multiline-static "
          label="Mensagem"
          multiline
          rows={4}
          defaultValue="Default Value"
          value={form.mensagem}
          onChange={(e) =>
            setForm({
              ...form,
              mensagem: e.target.value,
            })
          }
        />
      </div>

      <ButtonMolecule
        onClick={handleSubmit}
        children
        style={{
          backgroundColor: "red",
          marginTop: "51px",
          width: "252px",
          height: "52px",
        }}
        title={"Enviar agora"}
      />
    </div>
  );
}
