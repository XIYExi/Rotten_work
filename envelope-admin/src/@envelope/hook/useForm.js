import _ from '@lodash';
import { useCallback, useState } from 'react';

function useForm(initialState, onSubmit) {
  const [form, setForm] = useState(initialState);

  const handleChange = useCallback((event) => {
    event.persist();

    /*向form中添加新的数据*/
    setForm((_form) =>
        /*本质上是在调用_.setWith*/
      _.setIn(
        { ..._form },
        event.target.name,
        event.target.type === 'checkbox' ? event.target.checked : event.target.value
      )
    );
  }, []);

  /*如果当前form中的内容和初始值不同就赋回初值*/
  const resetForm = useCallback(() => {
    if (!_.isEqual(initialState, form)) {
      setForm(initialState);
    }
  }, [form, initialState]);

  /*手动添加form数据*/
  const setInForm = useCallback((name, value) => {
    setForm((_form) => _.setIn(_form, name, value));
  }, []);


  const handleSubmit = useCallback(
    (event) => {
      if (event) {
        event.preventDefault();
      }
      if (onSubmit) {
        onSubmit();
      }
    },
    [onSubmit]
  );

  return {
    form,
    handleChange,
    handleSubmit,
    resetForm,
    setForm,
    setInForm,
  };
}

export default useForm;
