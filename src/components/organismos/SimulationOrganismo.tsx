import { Slider, Tab, Tabs, makeStyles } from "@mui/material";
import React, { useContext, useState } from "react";

import { marks } from "../../constants";

import { TextAtom } from "../atomos/TextAtom";
import { SlideShowSimulationAtom } from "../atomos/SlideShowSimulationAtom";

import { ButtonMolecule } from "../../components/moleculas/ButtonMolecule";
import CardSimulationMolecule, {
  CardSimulationProps,
} from "../../components/moleculas/CardSimulationMolecule";

import { IMyContext, MyContext } from "../../context/MyContext";

import api from "../../services/api";
import { SimulationMolecule } from "../moleculas/SimulationMolecule";

export function SimulationOrganism() {
  const { packages, setPackages } = useContext(MyContext) as IMyContext;

  const [tabValue, setTabValue] = React.useState(199);
  const [sliderValue, setSliderValue] = React.useState(3);
  const [totalValue, setTotalValue] = React.useState(1194);

  let url = `/pacotes?price=${totalValue}`;

  function handleSliderChange(event: Event, newValue: number | number[]) {
    setSliderValue(newValue as number);
  }

  function handleTabsChange(event: React.SyntheticEvent, newValue: number) {
    setTabValue(newValue as number);
  }

  function totalSimulation() {
    setTotalValue(tabValue * sliderValue);
  }

  React.useEffect(() => {
    totalSimulation();
    loadPackages();
  }, [totalValue, tabValue, sliderValue, url]);

  async function loadPackages() {
    try {
      const response = await api.get(url);
      const total = response.data.packages;
      setPackages(total);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      id="simulador"
      className="sm:w-full sm:h-[70.9375rem] sm:grid content-center"
    >
      <TextAtom
        children
        text="Simule agora o seu melhor pacote"
        className="sm:text-6xl text-2xl	font-bold mb-3 mt-4.5 pt-10 px-5 text-black"
      />
      <TextAtom
        children
        className="sm:text-xl mb-3 mb-10 px-4 text-black"
        text="Faça uma simulação das viagens dos seus sonhos e começe a investir agora!"
      />
      <SimulationMolecule
        totalValue={totalValue}
        tabValue={tabValue}
        handleTabsChange={handleTabsChange}
        sliderValue={sliderValue}
        marks={marks}
        handleSliderChange={handleSliderChange}
      />

      <TextAtom
        children
        text="Quanto tempo deixaria o seu dinheiro investido?"
        className="mt-14 sm:text-xl mb-10 px-4 text-black"
      />
      <div className="hidden sm:flex flex-row flex-wrap justify-evenly">
        {packages.map((element: CardSimulationProps, index: number) => (
          <CardSimulationMolecule
            key={index}
            subname={element.subname}
            img={element.img}
            name={element.name}
            price={element.latest_information.total_amount_people}
            date={element.date.display}
          />
        ))}
      </div>
      {packages.length && (
        <SlideShowSimulationAtom className="sm:hidden w-full" />
      )}

      <div className="py-16">
        <ButtonMolecule
          children
          className="w-[20.375rem] h-[3.25rem] justify-self-center bg-[#F20F0F]"
          textClassName="text-[#FFFFFF]"
          title="Conheça nossos produtos"
        />
      </div>
    </div>
  );
}
