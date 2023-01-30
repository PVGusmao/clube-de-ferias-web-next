import { InputAdornment, TextField } from "@mui/material";
import { BsSearch } from "react-icons/bs";

export function SearchPostsOrganism() {
  return (
    <div className="h-[169px] mt-[45px] bg-[#C4C4C4] shadow-lg rounded-lg">
      <p className="text-white text-left text-[24px] font-bold mt-[27px] mb-[30px] ml-[18px] ">
        Pesquisar
      </p>
      <TextField
        id="input-with-icon-textfield"
        className="w-[234px] h-[60px] text-[16px] "
        placeholder="Pesquisar"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <BsSearch size={24} className="mr-3" />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </div>
  );
}
