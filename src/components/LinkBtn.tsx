import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

const LinkBtn = (props: { to: string, text: string }) => {
  const navigate = useNavigate();

  return (
    <Button
      type="link"
      onClick={() => {
        navigate(props.to);
      }}
    >
      {props.text}
    </Button>
  );
}

export default LinkBtn;
