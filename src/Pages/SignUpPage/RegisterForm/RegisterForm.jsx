import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from 'Redux/auth/authOperations';
import * as SC from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handlInputChange = evt => {
    const field = evt.target;
    switch (field.name) {
      case 'name':
        return setName(field.value);
      case 'email':
        return setEmail(field.value);
      case 'password':
        return setPassword(field.value);
      default:
        return;
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      signUp({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    resetForm();
  };

  return (
    <SC.RegisterForm
      onSubmit={handleSubmit}
      autoComplete="off"
      aria-label="sign up form"
    >
      <SC.Wrapper>
        <SC.InnerWrapper>
          <SC.LabelArea htmlFor="name">Name </SC.LabelArea>
          <SC.LabelArea htmlFor="email">Email </SC.LabelArea>
          <SC.LabelArea htmlFor="password">Password </SC.LabelArea>
        </SC.InnerWrapper>
        <SC.InnerWrapper>
          <SC.InputArea
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={handlInputChange}
            placeholder="Lucas Moura"
            required
          />
          <SC.InputArea
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handlInputChange}
            placeholder="LucasMoura@mail.com"
            required
          />
          <SC.InputArea
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handlInputChange}
            placeholder="**********"
            required
          />
        </SC.InnerWrapper>
      </SC.Wrapper>

      <SC.RegisterButton type="submit">Sign up</SC.RegisterButton>
    </SC.RegisterForm>
  );
};
