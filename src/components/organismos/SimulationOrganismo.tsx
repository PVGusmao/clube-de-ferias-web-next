import { Slider, Tab, Tabs } from "@mui/material";
import React from "react";

import CardSimulationMolecule from "../../components/moleculas/CardSimulationMolecule";

import { simulationCard } from "../../constants";
import { TextAtom } from "../atomos/TextAtom";

import { ButtonMolecule } from "../../components/moleculas/ButtonMolecule";
import { SlideShowSimulationAtom } from "../atomos/SlideShowSimulationAtom";

import { SimulationCard } from "../../interfaces/intefaces";

export function SimulationOrganism() {
  const [tabValue, setTabValue] = React.useState(0);
  const [sliderValue, setSliderValue] = React.useState(0);
  const [totalValue, setTotalValue] = React.useState(0);

  const marks = [
    {
      value: 3,
      label: "3 mêses",
    },
    {
      value: 6,
      label: "6 mêses",
    },
    {
      value: 9,
      label: "9 mêses",
    },
    {
      value: 12,
      label: "12 mêses",
    },
  ];

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
    // console.log("Total Value => " + totalValue);
    // console.log("Tab Value => " + tabValue);
    console.log("Total Value => " + totalValue);
  }, [totalValue, tabValue, sliderValue]);

  return (
    <div className="sm:w-full sm:h-[70.9375rem] sm:grid content-center">
      <TextAtom
        children
        text="Simule agora o seu melhor pacote"
        className="sm:text-6xl text-2xl	font-bold mb-3 mt-4.5 pt-10 px-5"
      />
      <TextAtom
        children
        className="sm:text-xl mb-3	mb-10	px-4	"
        text="Faça uma simulação das viagens dos seus sonhos e começe a investir agora!"
      />
      <div className="sm:w-[43.625rem] justify-self-center">
        <div className="justify-center px-2">
          <Tabs
            value={tabValue}
            onChange={handleTabsChange}
            centered
            className="mb-4 w-full"
            variant="fullWidth"
            scrollButtons
            allowScrollButtonsMobile
          >
            <Tab value={199} label="SILVER" />
            <Tab value={499} label="GOLD" />
            <Tab value={999} label="PLATINUM" />
            <Tab value={999} label="PLANO PROMO" />
          </Tabs>
        </div>
        <div className="px-12">
          <Slider
            defaultValue={3}
            max={12}
            min={3}
            value={sliderValue}
            onChange={handleSliderChange}
            aria-label="Default"
            valueLabelDisplay="auto"
            step={3}
            marks={marks}
          />
        </div>
      </div>
      <TextAtom
        children
        text="Quanto tempo deixaria o seu dinheiro investido?"
        className="mt-14 sm:text-xl mb-10 px-4"
      />
      <div className="hidden sm:flex flex-row flex-wrap justify-evenly">
        {simulationCard.map((element: SimulationCard, index: number) => (
          <CardSimulationMolecule
            hotel=""
            img={element.img}
            key={index}
            estado={element.estado}
            modelo={element.modelo}
            preco={element.preco}
          />
        ))}
      </div>

      <SlideShowSimulationAtom className=" sm:hidden w-full" />

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
