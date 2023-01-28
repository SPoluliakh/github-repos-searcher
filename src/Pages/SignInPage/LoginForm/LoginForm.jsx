import { useDispatch } from 'react-redux';
import { signIn } from 'Redux/auth/authOperations';
import * as SC from './LoginForm.styled';
import { useState } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handlInputChange = evt => {
    const field = evt.target;
    switch (field.name) {
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
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      signIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    resetForm();
  };
  return (
    <SC.LoginForm
      onSubmit={handleSubmit}
      autoComplete="off"
      aria-label="sign in form"
    >
      <SC.Wrapper>
        <SC.InnerWrapper>
          <SC.LabelArea htmlFor="email">Email </SC.LabelArea>
          <SC.LabelArea htmlFor="password">Password </SC.LabelArea>
        </SC.InnerWrapper>
        <SC.InnerWrapper>
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

      <SC.LoginButton type="submit">Log In</SC.LoginButton>
    </SC.LoginForm>
  );
};
