import { TextField } from "@mui/material";
import React, { useState } from "react";
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
      .post("/", body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + JSON.stringify(err.response));
      });

    console.log(body);
  }

  return (
    <div className="sm:w-[771px] w-[318px] h-[707px] flex flex-col justify-center items-center rounded-lg shadow-lg mb-[100px] sm:mb-[222px] mt-[50px] sm:mt-[122px] ">
      <div className="mb-4">
        <TextField
          className="sm:w-[572px] w-[269px] h-[60px]"
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
          className="sm:w-[572px] w-[269px] h-[60px] "
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
          className="sm:w-[572px] w-[269px] h-[60px] "
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
          className="sm:w-[572px] w-[269px] "
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
        textClassName="font-bold text-[12px] text-white"
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
