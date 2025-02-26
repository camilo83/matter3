import './button.scss';

type propsType = {
  title: string;
  color?: string;
  backgroundColor?: string;
};

export function CustomButton({ title, color, backgroundColor }: propsType) {
  return (
    <button
      className="custom-button"
      style={
        {
          '--text-color': color,
          '--background-color': backgroundColor,
        } as React.CSSProperties
      }
    >
      <span>{title}</span>
    </button>
  );
}
