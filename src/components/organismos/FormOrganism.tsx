import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import api from "../../services/api";
import { ButtonMolecule } from "../moleculas/ButtonMolecule";

import { useForm } from "react-hook-form";
import { IMyContext, MyContext } from "../../context/MyContext";

export function FormOrganism() {
  const { showModal, setShowModal, setBodyTextModal, setButtonTextModal } = useContext(MyContext) as IMyContext;

  const [form, setForm] = useState({
    name: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    await api
      .post("/contactus", data)
      .then((res) => {
        console.log(res.data);
        reset();
        setIsSubmitted(true);
        setShowModal(!showModal);
        setBodyTextModal(res.data[0]);
        setButtonTextModal('Voltar');
      })
      .catch((err) => {
        setShowModal(!showModal);
        setBodyTextModal(err.response.data.message);
        setButtonTextModal('Voltar');
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:w-[771px] w-[318px] h-[707px] flex flex-col justify-center items-center rounded-lg shadow-lg mb-[100px] sm:mb-[222px] mt-[50px] sm:mt-[122px] "
      >
        <div className="mb-4 flex flex-col  ">
          <TextField
            className="sm:w-[572px] w-[269px] h-[60px]"
            id="name"
            label="Seu nome*"
            variant="outlined"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-start text-[#FF0000]">Digite seu nome</span>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <TextField
            className="sm:w-[572px] w-[269px] h-[60px] "
            id="email"
            label="Seu e-mail*"
            variant="outlined"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && (
            <span className="text-start text-[#FF0000]">Digite seu email</span>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <TextField
            className="sm:w-[572px] w-[269px] h-[60px] "
            id="phone"
            label="Telefone*"
            variant="outlined"
            {...register("phone", { required: true })}
          />
          {errors.telefone && (
            <span className="text-start text-[#FF0000]">
              Digite seu telefone
            </span>
          )}
        </div>

        <div className="mb-4 flex flex-col">
          <TextField
            className="sm:w-[572px] w-[269px] "
            id="message"
            label="Mensagem"
            multiline
            rows={4}
            variant="outlined"
            {...register("message")}
          />
        </div>

        <ButtonMolecule
          type="submit"
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
      </form>
    </div>
  );
}
