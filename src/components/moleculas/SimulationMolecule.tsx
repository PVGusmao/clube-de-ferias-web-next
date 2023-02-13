import { Mark } from "@mui/base";
import { Slider, Tab, Tabs } from "@mui/material";
import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { TextAtom } from "../atomos/TextAtom";

type Props = {
  tabValue: number;
  handleTabsChange:
    | ((event: React.SyntheticEvent<Element, Event>, value: any) => void)
    | undefined;
  sliderValue: number;
  marks: boolean | Mark[] | undefined;
  handleSliderChange:
    | ((event: Event, value: number | number[], activeThumb: number) => void)
    | undefined;
  totalValue: number;
};

export function SimulationMolecule({
  tabValue,
  handleTabsChange,
  sliderValue,
  marks,
  handleSliderChange,
  totalValue,
}: Props) {
  const theme = createTheme({
    palette: {
      primary: {
        main:
          tabValue === 199
            ? "#BFBFBF"
            : tabValue === 499
            ? "#F6AB39"
            : tabValue === 999
            ? "#515151"
            : "#53A74E",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
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
            <Tab value={999.001} label="PLANO PROMO" />
          </Tabs>
        </div>
        <div className="flex justify-around sm:justify-between mt-[50px] bg-blue">
          <div>
            <TextAtom
              children
              className="font-bold"
              text={tabValue.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            />
            <TextAtom children text="Valor inicial do plano" />
          </div>
          <div>
            <TextAtom
              children
              className="font-bold"
              text={totalValue.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            />
            <TextAtom children text={`${sliderValue} meses`} />
          </div>
        </div>
        <div className="mt-[30px] px-12">
          <Slider
            defaultValue={6}
            max={15}
            min={6}
            value={sliderValue}
            onChange={handleSliderChange}
            aria-label="Default"
            // valueLabelDisplay="auto"
            step={3}
            marks={marks}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
