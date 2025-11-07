import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import { useTr } from "@myapp/libs/translation";
import { useTheme } from "libs/ui-kit/src/theme/ThemeContext";
import { FormValues } from "../../types";
import { FORM_ITEM_NAMES } from "../../utils/const";

const App: React.FC = () => {
  const [t] = useTr();
  const [form] = Form.useForm<FormValues>();
  const { name, setName } = useTheme();

  useEffect(() => {
    if (!name) return;

    form.setFieldsValue({
      [FORM_ITEM_NAMES.FULL_NAME]: name,
    });
  }, [name, form]); 

  const handleFinish = (values: FormValues): void => {
    const fullName = values[FORM_ITEM_NAMES.FULL_NAME];
    setName(fullName);
  };

  return (
    <div>
      <Form layout="vertical" form={form} onFinish={handleFinish}>
        <Form.Item
          name={FORM_ITEM_NAMES.FULL_NAME}
          label={t("form.full_name")}
        >
          <Input />
        </Form.Item>
      </Form>
      <Button onClick={() => form.submit()}>{t("form.submit")}</Button>
    </div>
  );
};

export default App;
