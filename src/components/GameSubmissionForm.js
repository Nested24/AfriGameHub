import React, { useState } from 'react';

const countries = [
  'Select Country',
  'Nigeria',
  'Kenya',
  'South Africa',
  'Egypt',
  'Ghana',
  'Morocco',
  'Uganda',
  'Tanzania',
  'Zimbabwe',
  'Other',
];

const regions = [
  'Select Region',
  'East Africa',
  'West Africa',
  'North Africa',
  'Central Africa',
  'Southern Africa',
  'Other',
];

const GameSubmissionForm = ({
  onGameSubmit,
  genres,
  isSubmitting,
  submitError,
}) => {
  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState(genres[0] || '');
  const [developerName, setDeveloperName] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState(countries[0]);
  const [region, setRegion] = useState(regions[0]);
  const [paidGame, setPaidGame] = useState('No');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');
  const [uploadDate, setUploadDate] = useState(() => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  });
  const [gameFile, setGameFile] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!title.trim()) errs.title = 'Game Title is required';
    if (!genre) errs.genre = 'Genre is required';
    if (!developerName.trim()) errs.developerName = 'Developer name is required';
    if (!address.trim()) errs.address = 'Address is required';
    if (!country || country === countries[0]) errs.country = 'Country is required';
    if (!region || region === regions[0]) errs.region = 'Region is required';
    if (!contactEmail.trim()) {
      errs.contactEmail = 'Contact email is required';
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(contactEmail)) {
      errs.contactEmail = 'Invalid email format';
    }
    if (!contactPhone.trim()) errs.contactPhone = 'Contact phone is required';
    // Payment info only required if paidGame is Yes
    if (paidGame === 'Yes' && !paymentInfo.trim()) {
      errs.paymentInfo = 'Payment information is required for paid games';
    }
    if (!uploadDate) errs.uploadDate = 'Upload date is required';
    if (!gameFile) errs.gameFile = 'Game file upload is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFileChange = (e) => {
    setGameFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // Compose object with all data including file
    onGameSubmit({
      title: title.trim(),
      genre,
      developerName: developerName.trim(),
      address: address.trim(),
      country,
      region,
      paidGame,
      contactEmail: contactEmail.trim(),
      contactPhone: contactPhone.trim(),
      paymentInfo: paymentInfo.trim(),
      uploadDate,
      gameFile,
    });
    // Reset form
    setTitle('');
    setGenre(genres[0] || '');
    setDeveloperName('');
    setAddress('');
    setCountry(countries[0]);
    setRegion(regions[0]);
    setPaidGame('No');
    setContactEmail('');
    setContactPhone('');
    setPaymentInfo('');
    setUploadDate(new Date().toISOString().split('T')[0]);
    setGameFile(null);
    setErrors({});
    // Clear file input value manually (requires ref or querySelector)
    // We'll let it be cleared on re-render by key change
  };

  return (
    <form className="game-submission-form" onSubmit={handleSubmit} noValidate>
      <h2>Submit Your Game</h2>

      <label htmlFor="game-title">Game Title</label>
      <input
        type="text"
        id="game-title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        aria-describedby={errors.title ? 'title-error' : undefined}
        aria-invalid={!!errors.title}
        required
        placeholder="Enter game title"
        disabled={isSubmitting}
      />
      {errors.title && <div className="error-message" id="title-error">{errors.title}</div>}

      <label htmlFor="game-genre">Genre</label>
      <select
        id="game-genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        aria-describedby={errors.genre ? 'genre-error' : undefined}
        aria-invalid={!!errors.genre}
        required
        disabled={isSubmitting}
      >
        {genres.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
      {errors.genre && <div className="error-message" id="genre-error">{errors.genre}</div>}

      <label htmlFor="developer-name">Developer Full Name</label>
      <input
        type="text"
        id="developer-name"
        value={developerName}
        onChange={(e) => setDeveloperName(e.target.value)}
        aria-describedby={errors.developerName ? 'developerName-error' : undefined}
        aria-invalid={!!errors.developerName}
        required
        placeholder="Enter your full name"
        disabled={isSubmitting}
      />
      {errors.developerName && <div className="error-message" id="developerName-error">{errors.developerName}</div>}

      <label htmlFor="developer-address">Developer Address</label>
      <textarea
        id="developer-address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        aria-describedby={errors.address ? 'address-error' : undefined}
        aria-invalid={!!errors.address}
        required
        placeholder="Enter your address"
        rows={3}
        disabled={isSubmitting}
      />
      {errors.address && <div className="error-message" id="address-error">{errors.address}</div>}

      <label htmlFor="developer-country">Country</label>
      <select
        id="developer-country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        aria-describedby={errors.country ? 'country-error' : undefined}
        aria-invalid={!!errors.country}
        required
        disabled={isSubmitting}
      >
        {countries.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      {errors.country && <div className="error-message" id="country-error">{errors.country}</div>}

      <label htmlFor="developer-region">Region</label>
      <select
        id="developer-region"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
        aria-describedby={errors.region ? 'region-error' : undefined}
        aria-invalid={!!errors.region}
        required
        disabled={isSubmitting}
      >
        {regions.map((r) => (
          <option key={r} value={r}>{r}</option>
        ))}
      </select>
      {errors.region && <div className="error-message" id="region-error">{errors.region}</div>}

      <fieldset>
        <legend>Is this a paid game?</legend>
        <label>
          <input
            type="radio"
            name="paid-game"
            value="Yes"
            checked={paidGame === 'Yes'}
            onChange={(e) => setPaidGame(e.target.value)}
            disabled={isSubmitting}
          />
          Yes
        </label>
        <label style={{marginLeft: "20px"}}>
          <input
            type="radio"
            name="paid-game"
            value="No"
            checked={paidGame === 'No'}
            onChange={(e) => setPaidGame(e.target.value)}
            disabled={isSubmitting}
          />
          No
        </label>
      </fieldset>
      {paidGame === 'Yes' && (
        <>
          <label htmlFor="payment-info">Payment Information</label>
          <textarea
            id="payment-info"
            value={paymentInfo}
            onChange={(e) => setPaymentInfo(e.target.value)}
            aria-describedby={errors.paymentInfo ? 'paymentInfo-error' : undefined}
            aria-invalid={!!errors.paymentInfo}
            placeholder="Enter payment details (e.g. PayPal, Bank Transfer)"
            rows={3}
            disabled={isSubmitting}
          />
          {errors.paymentInfo && <div className="error-message" id="paymentInfo-error">{errors.paymentInfo}</div>}
        </>
      )}

      <label htmlFor="contact-email">Contact Email</label>
      <input
        type="email"
        id="contact-email"
        value={contactEmail}
        onChange={(e) => setContactEmail(e.target.value)}
        aria-describedby={errors.contactEmail ? 'contactEmail-error' : undefined}
        aria-invalid={!!errors.contactEmail}
        placeholder="Enter contact email"
        required
        disabled={isSubmitting}
      />
      {errors.contactEmail && <div className="error-message" id="contactEmail-error">{errors.contactEmail}</div>}

      <label htmlFor="contact-phone">Contact Phone</label>
      <input
        type="tel"
        id="contact-phone"
        value={contactPhone}
        onChange={(e) => setContactPhone(e.target.value)}
        aria-describedby={errors.contactPhone ? 'contactPhone-error' : undefined}
        aria-invalid={!!errors.contactPhone}
        placeholder="Enter contact phone number"
        required
        disabled={isSubmitting}
      />
      {errors.contactPhone && <div className="error-message" id="contactPhone-error">{errors.contactPhone}</div>}

      <label htmlFor="upload-date">Game Upload Date</label>
      <input
        type="date"
        id="upload-date"
        value={uploadDate}
        onChange={(e) => setUploadDate(e.target.value)}
        aria-describedby={errors.uploadDate ? 'uploadDate-error' : undefined}
        aria-invalid={!!errors.uploadDate}
        required
        disabled={isSubmitting}
      />
      {errors.uploadDate && <div className="error-message" id="uploadDate-error">{errors.uploadDate}</div>}

      <label htmlFor="game-file">Upload Game File</label>
      <input
        type="file"
        id="game-file"
        accept=".zip,.rar,.7z,.exe,.apk,.dmg"
        onChange={handleFileChange}
        aria-describedby={errors.gameFile ? 'gameFile-error' : undefined}
        aria-invalid={!!errors.gameFile}
        required
        disabled={isSubmitting}
      />
      {errors.gameFile && <div className="error-message" id="gameFile-error">{errors.gameFile}</div>}

      {submitError && <div className="error-message submit-error" role="alert">{submitError}</div>}

      <button type="submit" className="submit-button" disabled={isSubmitting} aria-busy={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Game'}
      </button>
    </form>
  );
};

export default GameSubmissionForm;

