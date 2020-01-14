CREATE OR REPLACE FUNCTION validaCorreo() RETURNS trigger AS $$ 
          BEGIN 
           IF NEW.email ~* '^[A-Za-z0-9._%-]+@gmail.com+$' OR NEW.email ~* '^[A-Za-z0-9._%-]+@ucla.edu.ve+$' 
            THEN 
            ELSE RAISE EXCEPTION 'Solo son permitidos correos ucla.edu.ve o gmail.com'; 
           END IF; 
          RETURN NEW; 
          END; 
         $$ LANGUAGE plpgsql SECURITY DEFINER; 
    