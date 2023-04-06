export default function Daiktas({ item, styleClass }) {
  return (
    <li key={item.id} className={styleClass || null}>
      <span style={{ color: item.color }}>{item.name}</span>
    </li>
  );
}
