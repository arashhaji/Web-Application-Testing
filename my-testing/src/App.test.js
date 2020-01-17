import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Dashboard from './components/Dashboard';


test('renders without crashing', () => {
  const wrapper = rtl.render(<App/>)
  expect(wrapper).toBeVisible
});


test('hit button displayed', () => {
  const wrapper = rtl.render(<Dashboard/>)
  const element = wrapper.getByText(/hit/i)
  expect(element).toBeInTheDocument()
})

test('ball button displayed', () => {
  const wrapper = rtl.render(<Dashboard/>)
  const element = wrapper.getByText(/ball/i)
  expect(element).toBeInTheDocument()
})

test('strike button displayed', () => {
  const wrapper = rtl.render(<Dashboard/>)
  const element = wrapper.getByText(/strike/i)
  expect(element).toBeInTheDocument()
})
test('outs displayed', () => {
  const wrapper = rtl.render(<App/>)
  const element = wrapper.getByText(/out/i)
  expect(element).toBeInTheDocument()
})
