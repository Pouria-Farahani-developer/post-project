import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useTr } from "@myapp/libs/translation";
import { useTheme } from "libs/ui-kit/src/theme/ThemeContext";

const App = () => {
  const [t] = useTr()
  const [form] = Form.useForm();
  const { name, setName } = useTheme();


  useEffect(() => {
    if (name) {
      form.setFieldsValue({ 'full-name': name });
    }
  }, [form]);

  const handleFinish = (value: { 'full-name': string }) => {
    const { 'full-name': fullName } = value;
    setName(fullName)
  };

  return (
    <div>
      <Form layout="vertical" form={form} onFinish={handleFinish}>
        <Form.Item name="full-name" label={t('form.full_name')}>
          <Input />
        </Form.Item>
      </Form>
      <Button onClick={() => form.submit()}>{t('form.submit')}</Button>
    </div>
  );
};

export default App;
