CREATE  TRIGGER trValidaCorreo
          BEFORE INSERT ON tb_user
          FOR EACH ROW EXECUTE PROCEDURE validaCorreo();