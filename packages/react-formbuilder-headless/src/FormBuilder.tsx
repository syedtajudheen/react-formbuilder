import { forwardRef, ReactElement, useCallback, useImperativeHandle } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Field, Row } from './types/schema.type';
import { FormBuilderProps, FormState } from './types/FormBuilder.types';
import { InputField } from './components/InputField';
import { FieldWrapper, RowWrapper } from './FormBuilder.styles';
import { defaultComponents } from './constants';
import GlobalStyle from './globalStyles';

const FormBuilder = forwardRef((props: FormBuilderProps, ref): ReactElement => {
  const {
    formId = 'react-formbuilder-headless',
    components = defaultComponents,
    title,
    description,
    schema = { rows: [] },
    actions,
    renderLabel,
    renderActions,
    onSubmit,
    onReset
  } = props;

  const { control, handleSubmit, reset, watch } = useForm<FormState>({
    defaultValues: {},
  });

  const onSubmitHandler = useCallback((data: FormState) => {
    if (onSubmit) {
      onSubmit(data);
    }
  }, [onSubmit]);

  const onResetHandler = useCallback((): void => {
    reset();
    if (onReset) {
      onReset();
    }
  }, [reset, onReset]);

  const handleSubmitClick = (): void => {
    handleSubmit((data: FormState) => {
      onSubmitHandler(data);
    });
  };

  const renderField = (field: Field): ReactElement => {
    const { id, name, span, visibilityCondition } = field;

    // Check visibility condition
    const isVisible = visibilityCondition
      ? watch(visibilityCondition.fieldId) === visibilityCondition.value
      : true;

    if (!isVisible) {
      return <></>;
    }

    return (
      <FieldWrapper key={id} span={span ?? 1}>
        <Controller
          name={name}
          control={control}
          render={({ field: controllerField }) => (
            <InputField
              {...field}
              id={id}
              components={components}
              value={controllerField.value}
              renderLabel={renderLabel}
              onChange={controllerField.onChange}
            />
          )}
        />
      </FieldWrapper>
    );
  };

  const renderRows = (): ReactElement[] => {
    return schema?.rows?.map(({ fields }: Row, rowIndex: number) => (
      <RowWrapper key={rowIndex}>
        {fields?.map(renderField)}
      </RowWrapper>
    ));
  };

  const renderDefaultAction = (): ReactElement[] => (
    actions && actions.map((action, index) => {
      const onClick = () => action?.type === 'reset' ? onResetHandler : onSubmitHandler;
      return (
        <button key={index} type={action.type} onClick={onClick}>
          {action.label}
        </button>
      )
    })
  );

  useImperativeHandle(ref, () => ({
    submit: handleSubmit(onSubmitHandler),
    reset: onResetHandler
  }), [handleSubmit, onSubmitHandler, onResetHandler]);

  return (
    <>
      <GlobalStyle />
      <form id={formId} onSubmit={handleSubmit(onSubmitHandler)}>
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
        {renderRows()}
        {renderActions && renderActions({ actions, submit: handleSubmitClick, reset: onResetHandler })}
        {!renderActions && renderDefaultAction()}
      </form>
    </>
  )
});

export default FormBuilder;
