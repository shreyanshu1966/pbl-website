import React, { forwardRef } from 'react';
import { useFormContext } from 'react-hook-form';
import Icon from './Icon';

// Form Field Wrapper
export const FormField = ({ 
  label, 
  error, 
  required = false, 
  children, 
  className = '',
  ...props 
}) => (
  <div className={`form-field ${error ? 'form-field-error' : ''} ${className}`} {...props}>
    {label && (
      <label className="form-label">
        {label}
        {required && <span className="form-required">*</span>}
      </label>
    )}
    {children}
    {error && <span className="form-error-message">{error.message}</span>}
  </div>
);

// Input Component
export const Input = forwardRef(({ 
  type = 'text', 
  className = '', 
  error = false,
  icon,
  iconPosition = 'left',
  ...props 
}, ref) => {
  const inputClasses = `form-input ${error ? 'form-input-error' : ''} ${icon ? `form-input-${iconPosition}-icon` : ''} ${className}`;

  if (icon) {
    return (
      <div className="form-input-wrapper">
        {iconPosition === 'left' && (
          <div className="form-input-icon form-input-icon-left">
            {typeof icon === 'string' ? <Icon name={icon} size={16} /> : icon}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          className={inputClasses}
          {...props}
        />
        {iconPosition === 'right' && (
          <div className="form-input-icon form-input-icon-right">
            {typeof icon === 'string' ? <Icon name={icon} size={16} /> : icon}
          </div>
        )}
      </div>
    );
  }

  return (
    <input
      ref={ref}
      type={type}
      className={inputClasses}
      {...props}
    />
  );
});

Input.displayName = 'Input';

// Textarea Component
export const Textarea = forwardRef(({ 
  className = '', 
  error = false,
  rows = 4,
  ...props 
}, ref) => {
  const textareaClasses = `form-textarea ${error ? 'form-textarea-error' : ''} ${className}`;

  return (
    <textarea
      ref={ref}
      rows={rows}
      className={textareaClasses}
      {...props}
    />
  );
});

Textarea.displayName = 'Textarea';

// Select Component
export const Select = forwardRef(({ 
  options = [], 
  placeholder = 'Select an option',
  className = '', 
  error = false,
  ...props 
}, ref) => {
  const selectClasses = `form-select ${error ? 'form-select-error' : ''} ${className}`;

  return (
    <div className="form-select-wrapper">
      <select ref={ref} className={selectClasses} {...props}>
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="form-select-icon">
        <Icon name="chevron-down" size={16} />
      </div>
    </div>
  );
});

Select.displayName = 'Select';

// Checkbox Component
export const Checkbox = forwardRef(({ 
  label,
  className = '',
  ...props 
}, ref) => (
  <div className={`form-checkbox ${className}`}>
    <input
      ref={ref}
      type="checkbox"
      className="form-checkbox-input"
      {...props}
    />
    <div className="form-checkbox-indicator">
      <Icon name="check" size={12} />
    </div>
    {label && <span className="form-checkbox-label">{label}</span>}
  </div>
));

Checkbox.displayName = 'Checkbox';

// Radio Component
export const Radio = forwardRef(({ 
  options = [],
  name,
  className = '',
  ...props 
}, ref) => (
  <div className={`form-radio-group ${className}`}>
    {options.map((option, index) => (
      <div key={index} className="form-radio">
        <input
          ref={ref}
          type="radio"
          name={name}
          value={option.value}
          className="form-radio-input"
          {...props}
        />
        <div className="form-radio-indicator" />
        <span className="form-radio-label">{option.label}</span>
      </div>
    ))}
  </div>
));

Radio.displayName = 'Radio';

// File Upload Component
export const FileUpload = forwardRef(({ 
  accept,
  multiple = false,
  className = '',
  children,
  ...props 
}, ref) => (
  <div className={`form-file-upload ${className}`}>
    <input
      ref={ref}
      type="file"
      accept={accept}
      multiple={multiple}
      className="form-file-input"
      {...props}
    />
    <div className="form-file-label">
      <Icon name="upload" size={20} />
      {children || (
        <span>
          Drop files here or <span className="form-file-browse">browse</span>
        </span>
      )}
    </div>
  </div>
));

FileUpload.displayName = 'FileUpload';

// Form Components with React Hook Form integration
export const FormInput = ({ name, rules, ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <Input
      {...register(name, rules)}
      error={!!error}
      {...props}
    />
  );
};

export const FormTextarea = ({ name, rules, ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <Textarea
      {...register(name, rules)}
      error={!!error}
      {...props}
    />
  );
};

export const FormSelect = ({ name, rules, ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <Select
      {...register(name, rules)}
      error={!!error}
      {...props}
    />
  );
};

export const FormCheckbox = ({ name, rules, ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <Checkbox
      {...register(name, rules)}
      {...props}
    />
  );
};

export const FormRadio = ({ name, rules, ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  
  return (
    <Radio
      {...register(name, rules)}
      name={name}
      {...props}
    />
  );
};

export const FormFileUpload = ({ name, rules, ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <FileUpload
      {...register(name, rules)}
      error={!!error}
      {...props}
    />
  );
};

// Pre-built Forms
export const ContactForm = ({ onSubmit, className = '' }) => {
  const { handleSubmit } = useFormContext();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`contact-form ${className}`}>
      <div className="form-row">
        <FormField 
          label="First Name" 
          required
          error={useFormContext().formState.errors.firstName}
        >
          <FormInput 
            name="firstName"
            rules={{ required: 'First name is required' }}
            placeholder="Enter your first name"
          />
        </FormField>
        
        <FormField 
          label="Last Name" 
          required
          error={useFormContext().formState.errors.lastName}
        >
          <FormInput 
            name="lastName"
            rules={{ required: 'Last name is required' }}
            placeholder="Enter your last name"
          />
        </FormField>
      </div>

      <FormField 
        label="Email" 
        required
        error={useFormContext().formState.errors.email}
      >
        <FormInput 
          name="email"
          type="email"
          rules={{ 
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email address'
            }
          }}
          placeholder="Enter your email"
          icon="email"
        />
      </FormField>

      <FormField 
        label="Subject" 
        required
        error={useFormContext().formState.errors.subject}
      >
        <FormInput 
          name="subject"
          rules={{ required: 'Subject is required' }}
          placeholder="Enter subject"
        />
      </FormField>

      <FormField 
        label="Message" 
        required
        error={useFormContext().formState.errors.message}
      >
        <FormTextarea 
          name="message"
          rules={{ required: 'Message is required' }}
          placeholder="Enter your message"
          rows={6}
        />
      </FormField>

      <button type="submit" className="btn btn-primary btn-lg">
        Send Message
        <Icon name="send" size={16} />
      </button>
    </form>
  );
};

export default FormField;
