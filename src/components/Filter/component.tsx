import { PlaceholderElem, WhiteBlock } from "../index";
interface FilterProps {
  title: string;
}
export const Filter = ({ title }: FilterProps) => {
  return (
    <>
      <WhiteBlock>
        <h3>{title}</h3>
        <PlaceholderElem title="Жанр" />
        <PlaceholderElem title="Год выпуска" />
      </WhiteBlock>
    </>
  );
};
