import React, { forwardRef, useEffect, useState, useRef } from 'react';
import { useFormContext } from 'react-hook-form';
import Icon from './Icon';
import { validateField, validateFile } from '../utils/formUtils';

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

// File Upload Component with Preview and Validation
export const EnhancedFileUpload = forwardRef(({ 
  accept = "image/*,application/pdf",
  multiple = false,
  maxSize = 5 * 1024 * 1024, // 5MB
  maxFiles = 5,
  className = '',
  onChange,
  value,
  error,
  ...props 
}, ref) => {
  const [files, setFiles] = useState(value || []);
  const [dragActive, setDragActive] = useState(false);
  const [fileErrors, setFileErrors] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (value) {
      setFiles(Array.isArray(value) ? value : [value]);
    }
  }, [value]);

  const handleFileChange = (e) => {
    e.preventDefault();
    const newFiles = Array.from(e.target.files || []);
    processFiles(newFiles);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      processFiles(newFiles);
    }
  };

  const processFiles = (newFiles) => {
    // Validate files
    const errors = [];
    const validFiles = [];

    // Check max files
    if (!multiple && newFiles.length > 1) {
      errors.push('Only one file can be uploaded');
      newFiles = newFiles.slice(0, 1);
    }

    if (multiple && newFiles.length + files.length > maxFiles) {
      errors.push(`Maximum ${maxFiles} files allowed`);
      newFiles = newFiles.slice(0, maxFiles - files.length);
    }

    // Check each file
    newFiles.forEach(file => {
      const fileSize = file.size;
      const fileType = file.type;
      const acceptedTypes = accept.split(',').map(type => type.trim());
      
      if (fileSize > maxSize) {
        errors.push(`File "${file.name}" exceeds the maximum size of ${maxSize / (1024 * 1024)}MB`);
      } else if (!acceptedTypes.some(type => {
        if (type.endsWith('/*')) {
          const baseType = type.replace('/*', '');
          return fileType.startsWith(baseType);
        }
        return type === fileType || type === '*';
      })) {
        errors.push(`File "${file.name}" has an invalid file type`);
      } else {
        // Create a preview URL
        file.preview = URL.createObjectURL(file);
        validFiles.push(file);
      }
    });

    // Update state and call onChange
    if (validFiles.length > 0) {
      const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
      setFiles(updatedFiles);
      if (onChange) {
        onChange(multiple ? updatedFiles : updatedFiles[0]);
      }
    }

    setFileErrors(errors);
  };

  const removeFile = (indexToRemove) => {
    const updatedFiles = files.filter((_, index) => index !== indexToRemove);
    setFiles(updatedFiles);
    if (onChange) {
      onChange(multiple ? updatedFiles : updatedFiles[0] || null);
    }
  };

  return (
    <div className={`file-upload-enhanced ${dragActive ? 'file-upload-active' : ''} ${error || fileErrors.length > 0 ? 'file-upload-error' : ''} ${className}`}>
      <div 
        className="file-upload-dropzone"
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className="file-upload-input"
          onChange={handleFileChange}
          {...props}
        />
        
        <div className="file-upload-content">
          <Icon name="upload-cloud" size={40} className="file-upload-icon" />
          <div className="file-upload-text">
            <span className="file-upload-title">
              {dragActive ? 'Drop files to upload' : 'Click or drag files to upload'}
            </span>
            <span className="file-upload-subtitle">
              {multiple 
                ? `Up to ${maxFiles} files, max ${maxSize / (1024 * 1024)}MB each` 
                : `Max file size: ${maxSize / (1024 * 1024)}MB`}
            </span>
          </div>
        </div>
      </div>

      {/* File errors */}
      {fileErrors.length > 0 && (
        <div className="file-upload-errors">
          {fileErrors.map((error, index) => (
            <div key={index} className="file-upload-error-message">
              <Icon name="alert-circle" size={16} className="mr-2" />
              {error}
            </div>
          ))}
        </div>
      )}

      {/* Display error from props */}
      {error && (
        <div className="file-upload-errors">
          <div className="file-upload-error-message">
            <Icon name="alert-circle" size={16} className="mr-2" />
            {error}
          </div>
        </div>
      )}

      {/* File Preview */}
      {files.length > 0 && (
        <div className="file-upload-preview">
          {files.map((file, index) => (
            <div key={index} className="file-upload-preview-item">
              {file.type.startsWith('image/') ? (
                <div className="file-upload-preview-image">
                  <img src={file.preview} alt={file.name} />
                </div>
              ) : (
                <div className="file-upload-preview-icon">
                  <Icon name={file.type.includes('pdf') ? 'file-text' : 'file'} size={24} />
                </div>
              )}
              <div className="file-upload-preview-info">
                <div className="file-upload-preview-name">{file.name}</div>
                <div className="file-upload-preview-size">{(file.size / 1024).toFixed(1)}KB</div>
              </div>
              <button 
                type="button" 
                className="file-upload-preview-remove"
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
              >
                <Icon name="x" size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});

EnhancedFileUpload.displayName = 'EnhancedFileUpload';

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

export const FormEnhancedFileUpload = ({ name, rules, ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <EnhancedFileUpload
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

// Create Form object with all subcomponents
const Form = {
  Field: FormField,
  Label: ({ children, className = '', ...props }) => (
    <label className={`block text-sm font-medium text-gray-700 mb-1 ${className}`} {...props}>
      {children}
    </label>
  ),
  Input,
  Textarea,
  Select,
  Checkbox,
  Radio,
  FileUpload,
  EnhancedFileUpload
};

export default Form;
