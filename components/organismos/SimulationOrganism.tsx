import React, { useContext } from "react";

import { TextAtom } from "../atomos/TextAtom";
import { SlideShowSimulationAtom } from "../atomos/SlideShowSimulationAtom";

import { ButtonMolecule } from "../moleculas/ButtonMolecule";
import { SimulationMolecule } from "../moleculas/SimulationMolecule";
import CardSimulationMolecule, { CardSimulationProps } from "../moleculas/CardSimulationMolecule";

import { IMyContext, MyContext } from "../../context/MyContext";

import axios from "axios";

type Props = {
  data: any;
};

export function SimulationOrganism({ data }: Props) {
  const { packages, setPackages } = useContext(MyContext) as IMyContext;

  const [tabValue, setTabValue] = React.useState(199);
  const [sliderValue, setSliderValue] = React.useState(6);
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
      const response = await axios.get(`http://cdf-api-site.herokuapp.com/api${url}`);
      const total = response.data.packages;
      setPackages(total);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      id="simulador"
      className="flex flex-col sm:w-full sm:h-[70.9375rem] sm:grid content-center items-center justify-center"
    >
      <TextAtom
        children
        text="Vamos simular uma viagem ?"
        className="sm:text-6xl text-2xl	font-bold mb-[25px] mt-4.5 pt-[10px] px-5 text-black"
      />
      <div className="flex flex-col items-center">
        <TextAtom
          children
          className="sm:text-xl px-4 text-black font-medium sm:w-full w-[300px]"
          text="Escolha o plano que mais combina com você e veja quantos meses"
        />
        <TextAtom
          children
          className="sm:text-xl font-medium mb-3 mb-10 px-4 text-black sm:w-full w-[300px]"
          text="precisa acumular para planejar a viagem dos seus sonhos."
        />
      </div>
      <SimulationMolecule
        totalValue={totalValue}
        tabValue={tabValue}
        handleTabsChange={handleTabsChange}
        sliderValue={sliderValue}
        marks={data.paulo.marks}
        handleSliderChange={handleSliderChange}
      />

      <div className="hidden sm:flex flex-row flex-wrap justify-evenly">
        {packages.map((element: any, index: number) => (
          <CardSimulationMolecule
            key={index}
            subname={element.subname}
            img={element.img}
            name={element.name}
            price={element?.latest_information?.total_amount_people}
            date={element.date.display}
          />
        ))}
      </div>

      <a className="hidden sm:flex mt-10 justify-center " href="#baixe-o-app">
        <ButtonMolecule
          className="w-[400px] h-[70px] rounded-2xl bg-[red]"
          textClassName="text-white font-bold text-xl"
          children
          title="Baixar o app"
          onPress={() => {}}
        />
      </a>

      {packages.length && (
        <SlideShowSimulationAtom className="sm:hidden w-full" />
      )}

      <a className="sm:hidden " href="#baixe-o-app">
        <ButtonMolecule
          className="w-[200px] h-[70px] mt-[20px] mb-[100px] rounded-2xl bg-[red]"
          textClassName="text-white font-bold text-xl"
          children
          title="Baixar o app"
          onPress={() => {}}
        />
      </a>
    </div>
  );
}
