import React from "react";
import { HStack, Icon, Input, Textarea } from "@chakra-ui/react";
import { Field } from "../components/ui/field.jsx";
import { Checkbox } from "../components/ui/checkbox.jsx";
import { HiCheck, HiOutlinePlus, HiX } from "react-icons/hi";
import { Radio, RadioGroup } from "../components/ui/radio.jsx";
import { Switch } from "../components/ui/switch.jsx";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "../components/ui/radio-card.jsx";
import { FaApplePay } from "react-icons/fa6";
import { SiKakao, SiNaver, SiSamsungpay } from "react-icons/si";

function MyApp28(props) {
  return (
    <div style={{ margin: "10px" }}>
      <h5>icons</h5>
      <SiSamsungpay />
      <FaApplePay />
      <SiKakao />
      <SiNaver />
      <span style={{ fontSize: "3em", color: "green" }}>
        <SiNaver />
      </span>
      <hr />
      <h5>radio card</h5>
      <RadioCardRoot>
        <HStack>
          <RadioCardLabel>결제수단</RadioCardLabel>
          <RadioCardItem
            icon={
              <Icon fontSize="2xl">
                <FaApplePay />
              </Icon>
            }
            indicator={false}
            value={1}
            label="Apple Pay"
          />
          <RadioCardItem
            icon={
              <Icon fontSize="2xl">
                <SiSamsungpay />
              </Icon>
            }
            indicator={false}
            value={2}
            label="Samsung Pay"
          />
          <RadioCardItem
            icon={
              <Icon fontSize="2xl">
                <SiNaver />
              </Icon>
            }
            indicator={false}
            value={3}
            label="Naver Pay"
          />
          <RadioCardItem
            icon={
              <Icon fontSize="2xl">
                <SiKakao />
              </Icon>
            }
            indicator={false}
            value={4}
            label="Kakao Pay"
          />
        </HStack>
      </RadioCardRoot>
      <hr />

      <h5>switch</h5>
      <Switch
        colorPalette="blue"
        size="lg"
        trackLabel={{
          on: (
            <Icon color="yellow.400">
              <FaSun />
            </Icon>
          ),
          off: (
            <Icon color="gray.400">
              <FaMoon />
            </Icon>
          ),
        }}
      >
        동의
      </Switch>
      <Switch variant="raised">동의</Switch>
      <Switch size="lg" thumbLabel={{ on: <HiCheck />, off: <HiX /> }}>
        스위치야!
      </Switch>
      <hr />

      <h5>radio button</h5>
      <RadioGroup>
        <Radio value={1}>option1</Radio>
        <Radio value={2}>option2</Radio>
        <Radio value={3}>option3</Radio>
      </RadioGroup>
      <hr />

      <h5>checkbox</h5>
      <Checkbox icon={<HiOutlinePlus />}>동의</Checkbox>
      <hr />
      <Checkbox variant="outline" checked>
        동의
      </Checkbox>
      <hr />
      <Checkbox variant="solid"> 동의 </Checkbox>
      <hr />
      <Checkbox variant="subtle"> 동의 </Checkbox>
      <hr />
      <input type="checkbox" id="check1" />
      <label htmlFor="check1">동의</label>
      <hr />

      <h5>textarea</h5>
      <Textarea placeholder="자기소개 1000자 제한" variant="flushed"></Textarea>
      <hr />
      <Field label="Email" required helperText="이메일을 입력해주세요.">
        <Input />
      </Field>
      <Input variant="subtle" placeholder="이메일을 입력해주세요." />
      <Input variant="outline" placeholder="이메일을 입력해주세요." />
      <Input variant="flushed" placeholder="이메일을 입력해주세요." />
      <hr />
      <input type="text" placeholder="이메일을 입력해주세요." />
    </div>
  );
}

export default MyApp28;
