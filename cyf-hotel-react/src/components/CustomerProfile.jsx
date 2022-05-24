const CustomerProfile = ({ id }) => {
    const [customerInfo, setCustomerInfo] = useState(null);
    useEffect(() => {
        
      if (id > 0) {
        fetch(`https://cyf-react.glitch.me/delayed`)
          .then(response => response.json())
          .then(data => setCustomerInfo(data));
      }
    }, [id]);
  
    return (
      <div>
        {id && customerInfo
          ? `Customer profile ${customerInfo.id} ${
              customerInfo.email
            } is the customer vip: ${customerInfo.vip} ${
              customerInfo.phoneNumber
            }`
          : "loading"}
      </div>
    );

  };
  export default CustomerProfile;