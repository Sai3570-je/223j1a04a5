import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Paper, 
  Typography, 
  TextField, 
  Button, 
  Box, 
  Card, 
  CardContent, 
  Alert,
  Chip,
  Grid,
  AppBar,
  Toolbar,
  Tab,
  Tabs
} from '@mui/material';
import { 
  Link as LinkIcon, 
  ContentCopy, 
  Analytics, 
  Schedule 
} from '@mui/icons-material';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css';

// URL Shortener Page Component
function URLShortenerPage() {
  const [url, setUrl] = useState('');
  const [customShortcode, setCustomShortcode] = useState('');
  const [validityPeriod, setValidityPeriod] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedUrls = localStorage.getItem('shortenedUrls');
    if (savedUrls) {
      setShortenedUrls(JSON.parse(savedUrls));
    }
  }, []);

  // Save to localStorage whenever shortenedUrls changes
  useEffect(() => {
    localStorage.setItem('shortenedUrls', JSON.stringify(shortenedUrls));
  }, [shortenedUrls]);

  // Generate random shortcode
  const generateShortcode = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  // Validate URL format
  const isValidUrl = (string) => {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  };

  // Check if shortcode is unique
  const isUniqueShortcode = (shortcode) => {
    return !shortenedUrls.some(item => item.shortcode === shortcode);
  };

  // Validate custom shortcode
  const isValidShortcode = (shortcode) => {
    return /^[a-zA-Z0-9]+$/.test(shortcode) && shortcode.length >= 3 && shortcode.length <= 20;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate URL
    if (!url.trim()) {
      setError('Please enter a URL');
      return;
    }

    if (!isValidUrl(url)) {
      setError('Please enter a valid URL (include http:// or https://)');
      return;
    }

    // Validate custom shortcode if provided
    let finalShortcode = customShortcode.trim();
    if (finalShortcode) {
      if (!isValidShortcode(finalShortcode)) {
        setError('Custom shortcode must be 3-20 characters long and contain only letters and numbers');
        return;
      }
      if (!isUniqueShortcode(finalShortcode)) {
        setError('This shortcode is already taken. Please choose a different one.');
        return;
      }
    } else {
      // Generate unique shortcode
      do {
        finalShortcode = generateShortcode();
      } while (!isUniqueShortcode(finalShortcode));
    }

    // Validate validity period
    let validityMinutes = validityPeriod ? parseInt(validityPeriod) : 30; // Default 30 minutes
    if (validityPeriod && (isNaN(validityMinutes) || validityMinutes <= 0)) {
      setError('Validity period must be a positive number');
      return;
    }

    // Create shortened URL entry
    const newEntry = {
      id: Date.now(),
      originalUrl: url,
      shortcode: finalShortcode,
      shortUrl: `http://localhost:3000/${finalShortcode}`,
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + validityMinutes * 60 * 1000).toISOString(),
      clicks: 0,
      clickData: []
    };

    setShortenedUrls(prev => [newEntry, ...prev]);
    setSuccess('URL shortened successfully!');
    
    // Reset form
    setUrl('');
    setCustomShortcode('');
    setValidityPeriod('');
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setSuccess('Copied to clipboard!');
    setTimeout(() => setSuccess(''), 2000);
  };

  const isExpired = (expiresAt) => {
    return new Date() > new Date(expiresAt);
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <LinkIcon sx={{ mr: 2, fontSize: 32, color: 'primary.main' }} />
          <Typography variant="h4" component="h1">
            URL Shortener
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Enter URL to shorten"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com/very-long-url"
                variant="outlined"
                required
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Custom Shortcode (optional)"
                value={customShortcode}
                onChange={(e) => setCustomShortcode(e.target.value)}
                placeholder="mycode123"
                variant="outlined"
                helperText="3-20 characters, letters and numbers only"
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Validity Period (minutes)"
                type="number"
                value={validityPeriod}
                onChange={(e) => setValidityPeriod(e.target.value)}
                placeholder="30"
                variant="outlined"
                helperText="Default: 30 minutes"
              />
            </Grid>
            
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{ py: 1.5 }}
              >
                Shorten URL
              </Button>
            </Grid>
          </Grid>
        </form>

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mt: 2 }}>
            {success}
          </Alert>
        )}
      </Paper>

      {/* Display shortened URLs */}
      {shortenedUrls.length > 0 && (
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            Your Shortened URLs
          </Typography>
          
          {shortenedUrls.slice(0, 5).map((item) => (
            <Card key={item.id} sx={{ mb: 2 }}>
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ flex: 1, mr: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Original URL:
                    </Typography>
                    <Typography variant="body1" sx={{ wordBreak: 'break-all', mb: 1 }}>
                      {item.originalUrl}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      Shortened URL:
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="h6" color="primary.main">
                        {item.shortUrl}
                      </Typography>
                      <Button
                        size="small"
                        startIcon={<ContentCopy />}
                        onClick={() => copyToClipboard(item.shortUrl)}
                      >
                        Copy
                      </Button>
                    </Box>
                  </Box>
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 1 }}>
                    {isExpired(item.expiresAt) ? (
                      <Chip label="Expired" color="error" size="small" />
                    ) : (
                      <Chip label="Active" color="success" size="small" />
                    )}
                    <Chip 
                      icon={<Analytics />} 
                      label={`${item.clicks} clicks`} 
                      variant="outlined" 
                      size="small" 
                    />
                  </Box>
                </Box>
                
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                  <Typography variant="caption" color="text.secondary">
                    Created: {new Date(item.createdAt).toLocaleString()}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Expires: {new Date(item.expiresAt).toLocaleString()}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Paper>
      )}
    </Container>
  );
}

// Statistics Page Component
function StatisticsPage() {
  const [shortenedUrls, setShortenedUrls] = useState([]);

  useEffect(() => {
    const savedUrls = localStorage.getItem('shortenedUrls');
    if (savedUrls) {
      setShortenedUrls(JSON.parse(savedUrls));
    }
  }, []);

  const isExpired = (expiresAt) => {
    return new Date() > new Date(expiresAt);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
        <Analytics sx={{ mr: 2, fontSize: 32, color: 'primary.main' }} />
        <Typography variant="h4" component="h1">
          URL Statistics
        </Typography>
      </Box>

      {shortenedUrls.length === 0 ? (
        <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="text.secondary">
            No shortened URLs found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Create some shortened URLs first to see statistics here.
          </Typography>
        </Paper>
      ) : (
        <Grid container spacing={3}>
          {shortenedUrls.map((item) => (
            <Grid item xs={12} key={item.id}>
              <Card elevation={3}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box sx={{ flex: 1, mr: 2 }}>
                      <Typography variant="h6" gutterBottom>
                        {item.shortUrl}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ wordBreak: 'break-all', mb: 2 }}>
                        {item.originalUrl}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                        <Chip 
                          icon={<Schedule />} 
                          label={`Created: ${new Date(item.createdAt).toLocaleDateString()}`} 
                          variant="outlined" 
                          size="small" 
                        />
                        <Chip 
                          icon={<Schedule />} 
                          label={`Expires: ${new Date(item.expiresAt).toLocaleDateString()}`} 
                          variant="outlined" 
                          size="small" 
                        />
                        {isExpired(item.expiresAt) ? (
                          <Chip label="Expired" color="error" size="small" />
                        ) : (
                          <Chip label="Active" color="success" size="small" />
                        )}
                      </Box>
                    </Box>
                    
                    <Box sx={{ textAlign: 'center' }}>
                      <Typography variant="h4" color="primary.main">
                        {item.clicks}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Total Clicks
                      </Typography>
                    </Box>
                  </Box>
                  
                  {item.clickData && item.clickData.length > 0 && (
                    <Box>
                      <Typography variant="subtitle2" gutterBottom>
                        Click Details:
                      </Typography>
                      {item.clickData.slice(-5).map((click, index) => (
                        <Typography key={index} variant="caption" display="block" color="text.secondary">
                          • {new Date(click.timestamp).toLocaleString()} - Source: {click.source || 'Direct'} - Location: {click.location || 'Unknown'}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

// Redirect Handler Component
function RedirectHandler() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const shortcode = location.pathname.substring(1); // Remove leading slash
    
    if (!shortcode) {
      navigate('/');
      return;
    }

    const savedUrls = localStorage.getItem('shortenedUrls');
    if (savedUrls) {
      const urls = JSON.parse(savedUrls);
      const urlEntry = urls.find(item => item.shortcode === shortcode);
      
      if (urlEntry) {
        // Check if expired
        if (new Date() > new Date(urlEntry.expiresAt)) {
          setError('This shortened URL has expired.');
          setLoading(false);
          return;
        }
        
        // Update click count and data
        const updatedUrls = urls.map(item => 
          item.shortcode === shortcode 
            ? {
                ...item,
                clicks: item.clicks + 1,
                clickData: [
                  ...item.clickData,
                  {
                    timestamp: new Date().toISOString(),
                    source: document.referrer || 'Direct',
                    location: 'Unknown' // In a real app, you'd get geolocation
                  }
                ]
              }
            : item
        );
        
        localStorage.setItem('shortenedUrls', JSON.stringify(updatedUrls));
        
        // Redirect to original URL
        window.location.href = urlEntry.originalUrl;
      } else {
        setError('Shortened URL not found.');
        setLoading(false);
      }
    } else {
      setError('Shortened URL not found.');
      setLoading(false);
    }
  }, [location, navigate]);

  if (loading) {
    return (
      <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h5">Redirecting...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ py: 8, textAlign: 'center' }}>
      <Alert severity="error" sx={{ mb: 2 }}>
        {error}
      </Alert>
      <Button variant="contained" onClick={() => navigate('/')}>
        Go to Home
      </Button>
    </Container>
  );
}

// Main App Component with Navigation
function App() {
  const [tabValue, setTabValue] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setTabValue(0);
    } else if (location.pathname === '/statistics') {
      setTabValue(1);
    }
  }, [location]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    if (newValue === 0) {
      navigate('/');
    } else if (newValue === 1) {
      navigate('/statistics');
    }
  };

  // Check if current path is a shortcode redirect
  const isShortcodeRedirect = location.pathname !== '/' && location.pathname !== '/statistics';

  if (isShortcodeRedirect) {
    return <RedirectHandler />;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={2}>
        <Toolbar>
          <LinkIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            URL Shortener - Affordmed
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label="Shorten URL" />
          <Tab label="Statistics" />
        </Tabs>
      </Box>

      <Routes>
        <Route path="/" element={<URLShortenerPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
      </Routes>
    </Box>
  );
}

// Root App with Router
function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;

