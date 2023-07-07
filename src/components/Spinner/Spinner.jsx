import { Oval } from "react-loader-spinner";
import { Wrapper } from "./Spinner.module"

export const Spinner = () => {
  return <Wrapper>
    <Oval
      height={60}
      width={60}
      color="#4fa94d"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={5}
      strokeWidthSecondary={7}
    />
  </Wrapper>
};
