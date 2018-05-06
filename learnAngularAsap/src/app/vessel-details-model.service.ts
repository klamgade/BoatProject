export class VesselDetails{
    public VesselGeneralDetails : VesselGeneralDetails;
  
    constructor(private vesselGeneralDetails: VesselGeneralDetails){
        this.VesselGeneralDetails = vesselGeneralDetails;
    }
  }
  
  export class VesselGeneralDetails{
    public VesselName: string;
    public VesselPhotos: string[];
    public SurveyorName: string;
    public VesselType: string;
    public MNZNumber: number;
    public CallSignNumber: number;
    public Categories: string;
    public VesselPropulsion: string;
    public OperatingLimit: string;
    public OfficialRegistryNumber: string;
    public FishingNumber: number;
    public LengthOverall: string;
    public LoadLineLength: string;
    public RegisteredLength: string;
    public VesselCarriesDangerousGoods: string;
    public VesselDateOfBuild: string;
    public ActivitiesEngagedIn: string;
    public SpecialConditions: string;
  
  
  }
  