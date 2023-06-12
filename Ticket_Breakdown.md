- Ticket 1: Update Facility table to store custom Agent IDs
    - Modify the Facility table in the database schema to include a column for storing custom Agent IDs provided by the Facilities.

    - Implementation details:
        - A new column custom_agent_id is added to the Facility table.
        - The custom_agent_id column allows Facilities to save their own custom IDs for Agents they work with.

    - Effort Estimate: 4 hours

- Ticket 2: Update UI to allow Facilities to save custom Agent IDs
    - Enhance the user interface of the Facility management section to allow Facilities to save custom Agent IDs for each Agent they work with.

    - Implementation details:
        - The Facility management UI displays a new input field for entering custom Agent IDs.
        - Facilities can enter and save custom Agent IDs for each Agent associated with their Facility.
        - The Facility management UI validates and handles duplicate custom Agent IDs.

    - Time/Effort Estimate: 8 hours

- Ticket 3: Update getShiftsByFacility function to include custom Agent IDs
    - Modify the getShiftsByFacility function to include the custom Agent IDs when retrieving Shifts for a Facility.

    - Implementation details:
        - The getShiftsByFacility function retrieves Shifts for the Facility, including the custom Agent IDs associated with each Shift.
        - Modify the data retrieval logic to populate the custom Agent ID field in the Shift metadata.

    - Time/Effort Estimate: 4 hours

- Ticket 4: Update generateReport function to use custom Agent IDs
    - Enhance the generateReport function to utilize the custom Agent IDs instead of internal database IDs when generating reports.

    - Implementation details:
        - The generateReport function generates reports for Facilities using the custom Agent IDs provided.
        - The generated reports display the custom Agent IDs instead of the internal database IDs.

    - Time/Effort Estimate: 8 hours

- Ticket 5: Update report submission process to include custom Agent IDs
    - Modify the report submission process to include the custom Agent IDs when the report is submitted by the Facility.

    - Implementation details:
        - The report submission process captures the custom Agent IDs associated with the submitted report.

    - Time/Effort Estimate: 4 hours