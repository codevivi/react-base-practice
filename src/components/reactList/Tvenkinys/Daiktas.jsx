export default function Daiktas({ item, styleClass }) {
  return (
    <li key={item.id} className={styleClass || null}>
      id: {item.id}, type: {item.type}, name: <span style={{ color: item.color }}>{item.name}</span>, color: {item.color}
    </li>
  );
}
